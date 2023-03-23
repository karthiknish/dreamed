import { motion } from "framer-motion";

export default function Cookies() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
    >
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold mb-5">Cookie Policy</h1>
          <p className="mb-5">
            DreamEd Consultancy uses cookies on our website to provide you with
            a better user experience, analyze site traffic, and optimize the
            performance of our site. By using our site, you consent to the use
            of cookies in accordance with this Cookie Policy.
          </p>

          <h2 className="text-xl font-semibold mb-3">What are cookies?</h2>
          <p className="mb-5">
            Cookies are small text files that are stored on your computer or
            mobile device when you visit a website. They are used to remember
            your preferences, enable certain website functionalities, and gather
            information about your interaction with the site.
          </p>

          <h2 className="text-xl font-semibold mb-3">How we use cookies</h2>
          <p className="mb-5">We use cookies to:</p>
          <ul className="list-disc pl-5 mb-5">
            <li>Improve the functionality and performance of our site.</li>
            <li>Monitor and analyze site usage and traffic.</li>
            <li>
              Remember your preferences and personalize your experience on our
              site.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mb-3">
            Types of cookies we use
          </h2>
          <p className="mb-5">
            We use both session and persistent cookies on our site. Session
            cookies are temporary cookies that are deleted when you close your
            browser, while persistent cookies remain on your device until they
            are deleted or reach their expiration date.
          </p>

          <h2 className="text-xl font-semibold mb-3">Managing cookies</h2>
          <p className="mb-5">
            You can choose to accept or decline cookies by modifying your
            browser settings. Most web browsers automatically accept cookies,
            but you can usually modify your browser settings to decline cookies
            if you prefer. However, disabling cookies may prevent you from
            taking full advantage of the website.
          </p>

          <h2 className="text-xl font-semibold mb-3">
            Changes to this Cookie Policy
          </h2>
          <p className="mb-5">
            We may update our Cookie Policy from time to time. We will notify
            you of any changes by posting the new Cookie Policy on this page.
            You are advised to review this Cookie Policy periodically for any
            changes. Changes to this Cookie Policy are effective when they are
            posted on this page.
          </p>

          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Cookie Policy,
            please contact us at:
          </p>
          <p className="mb-3 font-medium">Email: info@dreamedconsultancy.com</p>
          <p></p>
        </div>
      </div>
    </motion.div>
  );
}
