import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";
import SideBar from "./Sidebar";

export default function Layout() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SideBar onClose={onClose} isOpen={isOpen} />
      <Flex
        top="0"
        position="sticky"
        bg="#000"
        p="5"
        zIndex="100"
        marginTop="-80px"
        height="80px"
        justifyContent="center"
        alignItems="center"
      >
        <Box p="10">
          <Heading size="md" color="#fff" fontFamily="Space Grotesk">
            <Box as="span" color="#bfb5d7">
              re
            </Box>
            <Box as="span" color="#efe8d8">
              wire
            </Box>
          </Heading>
        </Box>
        <Spacer />
        <Flex display={{ base: "none", md: "flex" }}>
          <NavLink heading="Home" link="/" />
          <NavLink heading="About" link="/signup" />
          <NavLink heading="Work" link="/" />
        </Flex>
        <Spacer />
        <Box display={{ base: "none", md: "block" }}>
          <Button bg="#efe8d8" mr="4" _hover={{ bg: "#bfb5d7" }}>
            Get Quote
          </Button>
        </Box>

        <HamburgerIcon
          onClick={onOpen}
          _hover={{ color: "grey" }}
          w={8}
          h={8}
          color="white"
          display={{ base: "block", md: "none" }}
        />
      </Flex>
    </>
  );
}

function NavLink({ heading, link }) {
  return (
    <Box p="5">
      <Heading
        size="sm"
        color="#fff"
        _hover={{ color: "#efe8d8" }}
        fontFamily="Space Grotesk"
      >
        <Link href={link}>{heading}</Link>
      </Heading>
    </Box>
  );
}
