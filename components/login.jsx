import { useSession, signIn, signOut } from "next-auth/react";
import Course from "../components/new-course";
import styles from "../styles/Home.module.css";
import {
  Spacer,
  Image,
  Wrap,
  Flex,
  Box,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Flex alignItems={"center"} backgroundColor={"brand.700"} py="12px" px="30px">
        <Heading fontSize={"2xl"} color="brand.800">
            {session.user.name}, Welcome to Tech Optimum Courses
          </Heading>
          
          <Spacer />
          <Image
           
            width={"41px"}
            src={session.user.image}
          />
        </Flex>
        <Wrap
          mx={["2rem !important", "auto !important"]}
          mb="5rem !important"
          maxW={"1200px"}
          margin={"auto"}
          direction="row"
          justify="center"
          zIndex="100"
          marginTop={["10px", "5px"]}
          spacing="30px"
        >
          <Course
            homeid="32778a40-8f63-4dbc-a6e8-a3f8b6d79e11"
            description="Learn the basics of Python and learn how to use datasets and variables."
            title={"Intro to Python"}
            alt={"Python bingbong"}
            bannerurl={"/python.jpg"}
          />
          <Course
            homeid="9a393c4c-a7ba-42b2-a55e-0d630102eda4"
            description={
              "Learn the basics of SQL and learn how to use databases."
            }
            title={"Intro to SQL"}
            alt={"SQL Banner"}
            bannerurl={"/sql.jpg"}
          />
          <Course
            homeid="c17129ba-2946-45d1-9487-79855746c4ca"
            description={
              "Learn the basics of Javascript and learn how to use variables and functions."
            }
            title={"Intro to Javascript"}
            alt={"Javascript Banner"}
            bannerurl={"/javascript.jpg"}
          />
        </Wrap>
        <div className="absolute">
          <button className="coursen-button" onClick={() => signOut()}>
            Logout of {session.user.name}
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="center-div">
        <br />
        <button className="button-center" onClick={() => signIn()}>
          Sign in with Discord
        </button>
      </div>
    </>
  );
}
