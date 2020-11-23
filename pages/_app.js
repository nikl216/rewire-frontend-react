import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Space Grotesk,Arial",
    heading: "Space Grotesk,Arial",
    mono: "Space Grotesk,Arial",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap');
      </style>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
