import "../styles/globals.css";
import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      duration: 1500,
    });
  }, []);
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
