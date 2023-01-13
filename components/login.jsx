import { useSession, signIn, signOut } from "next-auth/react";
import Course from "../components/new-course";
import styles from "../styles/Home.module.css";
export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <div className="center-section">
          <br />

          <div className="flex">
            <img className="discord-pfp" width={"40px"} src={session.user.image} />
            <h1 className="align-center">
              {session.user.name}, Welcome to Tech Optimum Courses{" "}
            </h1>
          </div>
      
        </div>
        <div className={styles.grid}>
          {/*   <Course
            homeid="5b245c12-e448-43ff-8183-373c37db2a62"
            description="Learn the Basics of HTML, CSS, and JavaScript."
            title={"Intro to Web Dev."}
            alt={"Web Developer Banner"}
            bannerurl={"/html.png"}
  ></Course>*/}

          <Course
            homeid="32778a40-8f63-4dbc-a6e8-a3f8b6d79e11"
            description="Learn the basics of Python and learn how to use datasets and variables."
            title={"Intro to Python"}
            alt={"Python bingbong"}
            bannerurl={"/python.jpg"}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <div className="center-div">
        <h1 className="align-center">Please sign in with Discord</h1>
        <button className="button-center" onClick={() => signIn()}>
          Sign in
        </button>
      </div>
    </>
  );
}
