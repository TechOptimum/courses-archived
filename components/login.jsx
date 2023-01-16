import { useSession, signIn, signOut } from "next-auth/react";
import Course from "../components/new-course";
import styles from "../styles/Home.module.css";
export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
      <div className="relative">
        <div className="center-section">
          <br />

          <div className="flex">
            <img
              className="discord-pfp"
              width={"40px"}
              src={session.user.image}
            />
            <h1 className="align-center">
              {session.user.name}, Welcome to Tech Optimum Courses
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
          <Course
            homeid="9a393c4c-a7ba-42b2-a55e-0d630102eda4"
            description={"Learn the basics of SQL and learn how to use databases."}
            title={"Intro to SQL"}
            alt={"SQL Banner"}
            bannerurl={"/sql.jpg"}
    
          />
        </div>
        <div className="absolute">
          <button className="coursen-button" onClick={() => signOut()}>Logout of {session.user.name}</button>

        </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="center-div">

          <br/>
        <button className="button-center" onClick={() => signIn()}>
          Sign in with Discord
        </button>

        
      </div>
    </>
  );
}
