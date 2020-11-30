import { Box, Center, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Banner({
  dark,
  imgFirst,
  src,
  alt,
  heading,
  subheading,
}) {
  const [height, setHeight] = useState(null);
  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  var color = "#bfb5d7";
  var textColor = "black";
  if (dark == true) {
    color = "black";
    textColor = "#bfb5d7";
  }
  return (
    <>
      <Box
        minHeight={height}
        width="100%"
        bg={color}
        paddingTop="80px"
        px="24px"
      >
        {imgFirst ? (
          <>
            <Box color={color} p="30px">
              <SimpleGrid
                templateColumns={["1fr", "1fr", "1fr 2fr", "1fr 2fr"]}
                templateRows="1fr"
                spacing="40px"
                position="relative"
              >
                <Box
                  bg={color}
                  boxShadow="mg"
                  rounded="md"
                  position="relative"
                  height={["150px", "150px", "350px", "500px"]}
                >
                  <Image src={src} alt={alt} layout="fill" object-fit="cover" />
                </Box>
                <Info
                  heading={heading}
                  subheading={subheading}
                  textColor={textColor}
                  color={color}
                />
              </SimpleGrid>
            </Box>
          </>
        ) : (
          <>
            <Box color={color} p="30px">
              <SimpleGrid
                templateColumns={["1fr", "1fr", "2fr 1fr", "2fr 1fr"]}
                templateRows="1fr"
                spacing="40px"
                position="relative"
              >
                <Info
                  heading={heading}
                  subheading={subheading}
                  textColor={textColor}
                  color={color}
                />
                <Box
                  bg={color}
                  boxShadow="mg"
                  rounded="md"
                  position="relative"
                  height={["150px", "150px", "350px", "500px"]}
                >
                  <Image src={src} alt={alt} layout="fill" object-fit="cover" />
                </Box>
              </SimpleGrid>
            </Box>
          </>
        )}
      </Box>
    </>
  );
}

function Info({ heading, subheading, color, textColor }) {
  return (
    <Box
      bg={color}
      boxShadow="mg"
      rounded="md"
      minHeight={["120px", "120px", "350px", "500px"]}
    >
      <SimpleGrid rows={2} columns={1} spacing={["10px", "20px"]} px={25}>
        <Box
          bg={color}
          minHeight={["100px", "150px", "125px", "180px"]}
          pt={[5, 20]}
          textAlign="center"
        >
          <Text
            color={textColor}
            fontSize={["3xl", "3xl", "3xl", "5xl"]}
            fontWeight="bold"
          >
            {heading}
          </Text>
        </Box>

        <Box
          bg={color}
          minHeight={["100px", "100px", "125px", "180px"]}
          px={0}
          textAlign="center"
        >
          <Text color={textColor} fontSize={["2xl", "2xl", "3xl", "3xl"]}>
            {subheading}
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
