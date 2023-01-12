import { useSession, signIn, signOut } from "next-auth/react";
export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button className="button-center" onClick={() => signOut()}>Sign out</button>
        <button className="button-center" onClick={() => window.location("/", "_self")}>
          Go to Courses?
        </button>
      </>
    );
  }
  return (
    <>
    <div className="center-div">
<h1 className="align-center">Please sign in with Discord</h1>
      <button className="button-center" onClick={() => signIn()}>Sign in</button>
      </div>
    </>
  );
}
