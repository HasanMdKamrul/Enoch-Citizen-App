import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import Main from "../layouts/Main";
import "../styles/globals.css";
import theme from "../Theme/Theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        {" "}
        <Toaster />
        <Component {...pageProps} />
      </Main>
    </ChakraProvider>
  );
}
