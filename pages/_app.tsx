import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals";
import { theme } from "styles/theme";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function MyApp({ Component, pageProps }: AppProps) {
  // NOTE: main 모드에선 console 전부 삭제
  if (process.env.NEXT_PUBLIC_NODE_ENV === "main") {
    console.log = () => {};
    console.warn = () => {};
    console.error = () => {};
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>We Can Farm!</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
