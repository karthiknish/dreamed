import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useEffect } from "react";
import { initGA, logPageView } from "../lib/ga";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
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
      <Footer />
    </SessionProvider>
  );
}
