import { useState } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globals";
import { theme } from "styles/theme";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

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
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
      )
    </>
  );
}

export default MyApp;
