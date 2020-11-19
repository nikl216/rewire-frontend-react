import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap');
      </style>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
