import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        options={{ showSpinner: false }}
        color="#ea5c3b
"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
