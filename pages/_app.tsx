import "@/styles/globals.css";
import "@/styles/style.css";
import "@/styles/bootstrap.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
    });
  }, []);
  return <Component {...pageProps} />;
}
