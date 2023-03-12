import Image from "next/image";
import Link from "next/link";
import { Flex, Box, Text, Heading, Button } from "@chakra-ui/react";

export default function Course({ homeid, bannerurl, alt, title, description, onclick }) {
  console.log(onclick);
  return (
    <>
      <Box borderRadius={"20px"} backgroundColor={"brand.700"} maxW={"300px"}>
        <Image width={"400px"} height="150px" alt={alt} src={bannerurl} />
        <Flex padding="10px 1rem" direction="column">
          <Heading color={"brand.800"} fontSize={"2xl"}>
            {title}
          </Heading>

          <Text mt="4px" fontSize={"sm"}>
            {description}
          </Text>

          <Button
            mt="8px"
            _hover={{
              color: "brand.800",
            }}
            color="brand.900"
            maxW={"50%"}
            fontWeight={"100"}
            backgroundColor={"brand.600"}
          >
            {
              (onclick) ?
                <Link href={homeid} rel="noreferrer" target={"_blank"} onClick={onclick}>
                  Begin Course
                </Link> :
                <Link href={homeid} rel="noreferrer" target={"_blank"}>
                  Begin Course
                </Link>
            }
          </Button>
        </Flex>
      </Box>
    </>
  );
}
