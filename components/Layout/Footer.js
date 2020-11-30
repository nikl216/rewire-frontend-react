import { Box, Center, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <Box
        bg="black"
        bottom="0"
        textAlign="center"
        minHeight={["150px", "200px"]}
      >
        <Box pt="40px">
          <SimpleGrid rows={2} columns={1} spacing={["30px", "40px"]} px={25}>
            <Box>
              <Heading as="span" size="md" color="#fff">
                <Box as="span" color="#bfb5d7">
                  re
                </Box>
                <Box as="span" color="#efe8d8">
                  wire
                </Box>
              </Heading>
              <Text as="span" size="md" ml="10px" color="#fff">
                © {new Date().getFullYear()} All rights reserved
              </Text>
            </Box>
            <Center>
              <Flex justify="space-between" width="200px">
                <Text as="span" color="white" fontSize="24px">
                  <FaLinkedin />
                </Text>
                <Text as="span" color="white" fontSize="24px">
                  <FaInstagram />
                </Text>
                <Text as="span" color="white" fontSize="24px">
                  <FaFacebook />
                </Text>
              </Flex>
            </Center>
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}
