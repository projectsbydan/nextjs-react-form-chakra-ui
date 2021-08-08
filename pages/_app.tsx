import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: (props: any) => ({
      body: {
        // light and dark mode background
        backgroundColor: mode("gray.400", "gray.900")(props),
      },
    }),
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // add the chakra ui provider with custom theming for the background
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
