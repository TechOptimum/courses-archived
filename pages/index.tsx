import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Course from "../components/new-course.jsx";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Optimum Courses</title>
        <meta name="description" content="Courses by Tech Optimum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="https://techoptimum.org">
          <Image
            className="image-link"
            width={"400px"}
            height="150px"
            src="/text-lblue-transparent.png"
            alt="Tech Optimum Logo"
          />
        </Link>
        <h1 className={styles.title}>Courses Portal</h1>
        <br />
        <br />

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
        <br />
        <p className="c-soon">More courses coming soon.</p>

        <p className="report-bugs-home">
          Return to our <a href="https://techoptimum.org">Main Website</a>
          <br />
          <br />
          Report course errors to our{" "}
          <a
            rel="noreferrer"
            target={"_blank"}
            href="https://discord.gg/HpRfm7kp3U"
          >
            Discord Server
          </a>
        </p>
      </main>
    </div>
  );
};

export default Home;
