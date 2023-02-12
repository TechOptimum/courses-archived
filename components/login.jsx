import { useSession, signIn, signOut } from "next-auth/react";
import Course from "../components/new-course";
import {
  Spacer,
  Image,
  Wrap,
  Flex,
  Center,
  Heading,
  Button,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Login() {
  const { data: session } = useSession();
  return (session) ? (
    <>
      <Flex
        alignItems={"center"}
        backgroundColor={"brand.700"}
        py="12px"
        px="30px"
      >
        <Heading fontSize={"2xl"} color="brand.800">
          {session.user.name}, Welcome to Tech Optimum Courses
        </Heading>

        <Spacer />

        <Button
          pl="0px"
          _hover={{
            color: "brand.800",
            backgroundColor: "brand.500"
          }}
          color="brand.900"
          maxW={"50%"}
          fontWeight={"100"}
          backgroundColor={"brand.600"}
          onClick={() => signOut()}
        >
          <Image width={"41px"} src={session.user.image} alt={session.user.name} />
          &nbsp; &nbsp;
          <CloseIcon />
        </Button>

      </Flex>
      <Wrap
        mx={["2rem !important", "auto !important"]}
        mb="5rem !important"
        maxW={"1200px"}
        margin={"auto"}
        direction="row"
        justify="center"
        zIndex="100"
        marginTop={["1rem", "4rem"]}
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
    </>
  ) : (
    <>
      <Center flexDirection={"column"}>
        <Heading color="brand.800" mt="8rem">
          Tech Optimum Courses
        </Heading>
        <Button
          mt="1rem" c
          _hover={{
            color: "brand.800",
          }}
          color="brand.900"
          maxW={"50%"}
          fontWeight={"100"}
          backgroundColor={"brand.700"}
          onClick={() => signIn()}
        >
          Sign in with Discord
        </Button>
      </Center>
    </>
  );
}
