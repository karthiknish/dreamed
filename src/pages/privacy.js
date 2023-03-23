import Head from "next/head";
import { motion } from "framer-motion";
export default function Privacy() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
    >
      <Head>
        <title>DreamEd Consultancy - Privacy Policy</title>
        <meta
          name="description"
          content="Privacy policy for DreamEd Consultancy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-semibold text-center mb-5">
            Privacy Policy
          </h1>
          <div className="text-gray-600">
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="mb-5">
              At DreamEd Consultancy, we are committed to protecting your
              privacy. This policy outlines our data collection, usage, and
              disclosure practices. By using our services, you agree to the
              collection and use of your information as described in this
              policy.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="mb-5">
              We may collect personal information such as your name, email
              address, phone number, and other relevant details when you
              register for our services or contact us through our website.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <p className="mb-5">
              We use your personal information to provide and improve our
              services, communicate with you about our services, and personalize
              your experience. We may also use the information for marketing
              purposes and to comply with legal obligations.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              Sharing Your Information
            </h2>
            <p className="mb-5">
              We may share your personal information with trusted third parties,
              such as service providers and partners, to provide and improve our
              services. We will not sell, rent, or otherwise disclose your
              personal information to third parties for their marketing purposes
              without your consent.
            </p>

            <h2 className="text-xl font-semibold mb-3">Security</h2>
            <p className="mb-5">
              We take appropriate security measures to protect your personal
              information from unauthorized access, disclosure, alteration, or
              destruction. While we strive to use commercially acceptable means
              to protect your personal information, we cannot guarantee its
              absolute security.
            </p>

            <h2 className="text-xl font-semibold mb-3">Cookies</h2>
            <p className="mb-5">
              We use cookies and similar tracking technologies to track activity
              on our website and gather information to improve and analyze our
              service. You can choose to disable cookies in your browser
              settings, but doing so may affect the functionality of our
              website.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              Links to Other Websites
            </h2>
            <p className="mb-5">
              Our website may contain links to external websites that are not
              operated by us. We have no control over the content and practices
              of these sites and cannot accept responsibility or liability for
              their respective privacy policies. We recommend that you review
              the privacy policy of any third-party website you visit.
            </p>

            <h2 className="text-xl font-semibold mb-3">
              Changes to This Privacy Policy
            </h2>
            <p className="mb-5">
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page.
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>

            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us at:
            </p>
            <p className="mb-5 font-medium">
              DreamEd Consultancy
              <br />
              Email: info@dreamedconsultancy.com
              <br />
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
