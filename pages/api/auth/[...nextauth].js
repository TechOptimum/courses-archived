import axios from "axios";
import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    /*   GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),*/
    DiscordProvider({
      clientId: process.env.NEXTAUTH_DISCORD_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_DISCORD_CLIENT_SECRET,
    }),
  ],
  session: {
    // enable jwt
    jwt: true,
  },
  //   Callback here
  //   Here
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;

        // add user to discord server
        // discord api docs: https://discord.com/developers/docs/resources/guild#add-guild-member
        try {
          await axios.put(
            `https://discord.com/api/guilds/${process.env.DISCORD_SERVER_ID}/members/${token.sub}`,
            { access_token: token.accessToken },
            {
              headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
              },
            }
          );
        } catch (error) {
          console.log(error);
        }
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
