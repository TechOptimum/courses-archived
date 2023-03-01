import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import axios from "axios";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    DiscordProvider({
      clientId: process.env.NEXTAUTH_DISCORD_CLIENT_ID,
      clientSecret: process.env.NEXTAUTH_DISCORD_CLIENT_SECRET || "",
      authorization: { params: { scope: "identify email guilds.join" } },
    }),
  ],
  debug: true,
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;

        try {
          if (!token.accessToken) return token;
          await axios.put(
            `https://discord.com/api/guilds/970544398192508948/members/${token.sub}`,
            {
              access_token: `${token.accessToken}`,
            },
            {
              headers: {
                Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
              },
            }
          );
        } catch (e) {}
      }
      return token;
    },
    async session({ session, token }) {
      if (!session) return session;
      // @ts-ignore
      session.accessToken = token.accessToken;
      // @ts-ignore
      session.user.id = token.sub;

      return session;
    },
  },
});
