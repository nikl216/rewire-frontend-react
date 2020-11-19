import { Box, Container, Text } from "@chakra-ui/react";
import useWindowDimensions from "../utils/windowheight";

export default function Banner() {
  const { height } = useWindowDimensions();

  return (
    <>
      <Box height={height} width="100%" bg="grey" paddingTop="80px">
        <Text>Hi</Text>
      </Box>
      <Box
        height={height}
        width="100%"
        bg="black"
        paddingTop="80px"
        color="white"
      >
        <Text>Hi</Text>
      </Box>
    </>
  );
}
