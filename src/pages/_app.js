import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useEffect } from "react";
import { initGA, logPageView } from "../lib/ga";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
export default function App({ session, Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}
