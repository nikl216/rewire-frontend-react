import {
  Box,
  Center,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { CloseIcon } from "@chakra-ui/icons";
export default function SideBar({ onClose, isOpen }) {
  return (
    <>
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen} size={"full"}>
        <DrawerOverlay>
          <DrawerContent bg="black">
            <DrawerHeader>
              <Center
                float="right"
                onClick={onClose}
                color="#efe8d8"
                _hover={{ color: "#bfb5d7" }}
              >
                <CloseIcon />
              </Center>
            </DrawerHeader>
            <DrawerBody>
              <SimpleGrid
                columns={1}
                rows={5}
                minChildHeight="30px"
                spacing="40px"
              >
                <LinkMobile heading="Home" link="/" click={onClose} />
                <LinkMobile heading="Work" link="/signup" click={onClose} />
                <LinkMobile heading="About" link="/" click={onClose} />
                <Box height="40px" color="#efe8d8"></Box>
              </SimpleGrid>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

function LinkMobile({ heading, link, click }) {
  return (
    <>
      <Link href={link}>
        <Center
          height="40px"
          color="#efe8d8"
          _hover={{ color: "#bfb5d7" }}
          onClick={click}
        >
          <Text fontSize="3xl">{heading}</Text>
        </Center>
      </Link>
    </>
  );
}
