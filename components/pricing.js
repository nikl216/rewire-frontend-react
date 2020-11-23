import { Box, Center, SimpleGrid, Square, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Pricing({ color }) {
  const [height, setHeight] = useState(null);
  if (process.browser) {
    useEffect(() => {
      setHeight(window.innerHeight);
      function handleResize() {
        setHeight(window.innerHeight);
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [window.innerHeight]);
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
        <Box
          py={["50px", "50px", "100px", "100px"]}
          px={["70px", "70px", "100px", "100px"]}
        >
          <SimpleGrid
            columns={[1, 2, 3, 3]}
            spacing={["60px", "60px", "80px", "100px"]}
          >
            <Card
              src="/../public/dashboard.svg"
              alt="personal"
              heading="Solo"
              subheading="Best for Personal Portfolios and Blogs"
              price="15,000"
            />
            <Card
              src="/../public/analytics.svg"
              alt="small business"
              heading="Small Business"
              subheading="The perfect plan for small Businesses"
              price="25,000"
            />
            <Card
              src="/../public/data.svg"
              alt="Custom"
              heading="Custom"
              subheading="A custom tailored plan for all your website needs"
              price="35,000"
            />
          </SimpleGrid>
        </Box>
      </Box>
    </>
  );
}

function Card({ src, alt, heading, subheading, price }) {
  return (
    <Box
      bg="white"
      boxShadow="lg"
      rounded="md"
      minHeight={["100px", "100px", "300px", "400px"]}
    >
      <SimpleGrid row={2} p="20px" spacing="30px">
        <Box
          bg="white"
          minHeight={["100px", "150px", "150px", "200px"]}
          position="relative"
        >
          <Image src={src} alt={alt} layout="fill" object-fit="cover" />
        </Box>
        <Box bg="white" minHeight={["100px", "100px", "100px", "160px"]}>
          <SimpleGrid textAlign="center" spacing={["10px", "20px"]}>
            <Box>
              <Text fontSize={["lg", "lg", "2xl", "3xl"]} fontWeight="bold">
                {heading}
              </Text>
              <Text fontSize={["lg", "xl"]}>
                Starts at Rs{" "}
                <Box as="span" fontSize={["lg", "xl"]} fontWeight="bold">
                  {price}
                </Box>
              </Text>
            </Box>
            <Box>
              <Text fontSize={["md", "xl", "2xl", "2xl"]}>{subheading}</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
