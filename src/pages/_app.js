import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "../components/markdown.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { initGA, logPageView } from "../lib/ga";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import Assistant from "@/components/assistant/Assistant";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    initGA();
    logPageView();
    router.events.on("routeChangeComplete", logPageView);
    return () => {
      router.events.off("routeChangeComplete", logPageView);
    };
  }, [router]);
  return (
    <SessionProvider>
      <Navbar />
      <Component {...pageProps} />
      {(process.env.DEV = true && <Assistant />)}
      <Footer />
    </SessionProvider>
  );
}
