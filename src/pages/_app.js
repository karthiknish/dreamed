import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "../components/markdown.css";
import { useEffect } from "react";
import { initGA, logPageView } from "../lib/ga";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import Assistant from "@/components/assistant/Assistant";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <SessionProvider>
      <Navbar />
      <Component {...pageProps} />
      {(process.env.DEV = true && <Assistant />)}
      <Footer />
    </SessionProvider>
  );
}
