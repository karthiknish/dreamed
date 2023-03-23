import Head from "next/head";
import { motion } from "framer-motion";
function Career() {
  return (
    <>
      <Head>
        <title>Career Studio</title>
      </Head>
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-50 p-4 mx-auto flex flex-col items-center"
      >
        <h1 className="text-4xl my-4">Dream Ed Career Studio</h1>
        <iframe
          className="rounded-lg"
          src="https://drive.google.com/file/d/1kOTBwOpG7zRGqE0nMDGN5OQDHw3HLyyD/preview"
          width="640"
          height="480"
          title="Video from Google Drive"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
      </motion.div>
    </>
  );
}

export default Career;
