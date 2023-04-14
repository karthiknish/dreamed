import Head from "next/head";
import Router from "next/router";
import { motion } from "framer-motion";
import TabsSection from "@/components/TabSection";
import TestimonialSection from "@/components/TestimonialSection";
import FaqSection from "@/components/FaqSection";
import Roshan from "../assets/Roshan.png";
import Karthik from "../assets/Karthik.png";
import Deekshita from "../assets/Deekshita.png";
import Faisal from "../assets/Faisal.png";
import Theju from "../assets/Theju.png";
import Surya from "../assets/Surya.png";
import Image from "next/image";
import { AiFillLinkedin } from "react-icons/ai";
import { Lato } from "next/font/google";
import Link from "next/link";
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
export default function Home() {
  return (
    <>
      <Head>
        <title>Dream ED</title>
        <meta
          name="title"
          content="DreamEd Consultancy - Your Gateway to Top Universities"
        />
        <meta
          name="description"
          content="DreamEd Consultancy offers personalized guidance and expert support to help students unlock their potential and gain admission to their dream universities. Our experienced consultants work closely with students to navigate the complex world of higher education and achieve their goals."
        ></meta>
        <meta
          name="keywords"
          content="DreamEd, Consultancy, University Admissions, Higher Education, College Applications, Scholarships, Career Planning, Study Abroad, Test Preparation"
        />
        <meta name="author" content="DreamEd Consultancy" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          property="og:title"
          content="DreamEd Consultancy - Your Gateway to Top Universities"
        />
        <meta
          property="og:description"
          content="DreamEd Consultancy offers personalized guidance and expert support to help students unlock their potential and gain admission to their dream universities. Our experienced consultants work closely with students to navigate the complex world of higher education and achieve their goals."
        />
        <meta
          property="og:image"
          content="https://dreamedconsultancy.com/images/og-image.jpg"
        />
        <meta property="og:url" content="https://dreamedconsultancy.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DreamEd Consultancy - Your Gateway to Top Universities"
        />
        <meta
          name="twitter:description"
          content="DreamEd Consultancy offers personalized guidance and expert support to help students unlock their potential and gain admission to their dream universities. Our experienced consultants work closely with students to navigate the complex world of higher education and achieve their goals."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="h-screen mx-auto bg-gradient-to-b from-blue-900 via-blue-300 to-transparent md:bg-gradient-to-r">
          <div className="h-full flex flex-col md:flex-row items-center">
            <div className="w-full px-12 py-8 md:py-0 md:w-1/2">
              <div className="lg:max-w-lg">
                <h1
                  className={`text-3xl font-semibold text-white lg:text-6xl ${lato.className}`}
                >
                  Empowering Your Future <br /> with{" "}
                  <span className="text-yellow-300">Education</span>
                </h1>

                <p className="mt-3 text-gray-200">
                  Empowering students to achieve their full potential through
                  personalized guidance and expert support in navigating the
                  complex world of education.
                </p>

                <button
                  onClick={() => Router.push("/information")}
                  className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto hover:bg-green-800 focus:outline-none focus:bg-green-800"
                >
                  Join us NOW!
                </button>
              </div>
            </div>

            <div className="relative w-full flex-grow md:h-full md:w-1/2">
              <Image
                className="absolute w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1525921429624-479b6a26d84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Header"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-700 via-transparent to-transparent opacity-100 md:bg-gradient-to-r md:from-blue-300"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-300 to-transparent opacity-75 md:bg-gradient-to-r md:from-blue-300"></div>
            </div>
          </div>
        </div>
        <section className="bg-gray-100 lg:flex lg:justify-center">
          <div className="overflow-hidden bg-gray-900 lg:flex lg:w-full lg:shadow-md ">
            <div className="lg:w-1/2">
              <div
                className=" bg-cover h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
                }}
              ></div>
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-200 md:text-3xl">
                Unlock Your Path to{" "}
                <span className="text-blue-500">Dream University</span>
              </h2>

              <p className="mt-4 text-gray-400  ">
                Discover the pathway to your dream university with personalized
                guidance, expert support, and innovative resources. Our team of
                dedicated professionals is committed to helping students
                navigate the complexities of higher education, ensuring they
                unlock their full potential and achieve their academic
                aspirations.
              </p>

              <div className="inline-flex w-full mt-6 sm:w-auto">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide text-gray-800  lg:text-4xl">
                Dedicated to helping you achieve your educational goals
              </h1>
              <p className="mt-4 text-gray-600 ">
                Our education consultancy has a team of experts who have
                extensive knowledge and experience in international education.
              </p>
              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                <div className="flex items-center text-gray-800 -px-3 ">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Expertise and Experience</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 ">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Comprehensive Services</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 ">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Increased Chances of Success</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 ">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Personalized Guidance</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Cost-Effective</span>
                </div>

                <div className="flex items-center text-gray-800 -px-3 ">
                  <svg
                    className="w-5 h-5 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>

                  <span className="mx-3">Networking Opportunities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <Image
              className="object-cover w-full h-full max-w-2xl rounded-md"
              src="https://images.unsplash.com/photo-1570616969692-54d6ba3d0397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2622&q=80"
              alt="glasses photo"
              layout="responsive"
              width={2622}
              height={1748}
              objectFit="cover"
            />
          </div>
        </div>
        <TestimonialSection />
        <TabsSection />
        <section className="bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl text-white">
              Our <span className="text-blue-500">Executive Team</span>
            </h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-300">
              United in Transforming the Educational Landscape by Fostering
              Creativity, Driving Innovation, and Collaborating to Shape the
              Next Generation of Global Learners
            </p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 border-gray-500 ">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src={Roshan.src}
                    alt="Roshan"
                    width={96}
                    height={96}
                    objectFit="cover"
                    layout="fixed"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold  capitalize md:text-2xl text-white group-hover:text-white">
                      Roshan Prakash
                    </h1>

                    <p className="mt-2 capitalize text-gray-300 group-hover:text-gray-300">
                      Career Expert
                    </p>
                  </div>
                </div>

                <p className="mt-4  text-gray-300 group-hover:text-gray-300">
                  Helped 200+ Students to secure Admissions and Visa World Wide
                  in their Dream Universities
                </p>

                <div className="flex mt-4 -mx-2">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/roshanprakash/"
                  >
                    <AiFillLinkedin className="text-2xl text-white" />
                  </Link>
                </div>
              </div>

              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 ">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src={Karthik.src}
                    alt="Karthik"
                    width={96}
                    height={96}
                    objectFit="cover"
                    layout="fixed"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-300 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Karthik Nishanth
                    </h1>

                    <p className="mt-2 text-gray-300 capitalize dark:text-gray-300 group-hover:text-gray-300">
                      Scholarship Expert
                    </p>
                  </div>
                </div>

                <p
                  className="mt-4 text-gray-300 
                  group-hover:text-gray-300"
                >
                  Assisted 50+ Students get Scholarships and tution fee Waivers
                  across Universities in USA, UK and Canada
                </p>

                <div className="flex mt-4 -mx-2">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/karthik-nishanth/"
                  >
                    <AiFillLinkedin className="text-2xl text-white" />
                  </Link>
                </div>
              </div>

              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 ">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src={Theju.src}
                    alt="Theju"
                    width={96}
                    height={96}
                    objectFit="cover"
                    layout="fixed"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-300 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Thejashree
                    </h1>

                    <p className="mt-2 text-gray-300 capitalize  group-hover:text-gray-300">
                      Finance Expert
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-300   group-hover:text-gray-300">
                  Analysed ROIs for Students based on their Study Location and
                  Career Prospects
                </p>

                <div className="flex mt-4 -mx-2">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/thejashree-janardhanan-37500821b/"
                  >
                    <AiFillLinkedin className="text-2xl text-white" />
                  </Link>
                </div>
              </div>

              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600  ">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src={Surya.src}
                    alt="Surya"
                    width={96}
                    height={96}
                    objectFit="cover"
                    layout="fixed"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-300 capitalize md:text-2xl  group-hover:text-white">
                      Surya KKumar
                    </h1>

                    <p className="mt-2 text-gray-300 capitalize group-hover:text-gray-300">
                      Visa Expert
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-300   group-hover:text-gray-300">
                  Submitted more than 250+ Visa applications to UK,USA,Canada
                  and Australia with a success rate of 100%
                </p>

                <div className="flex mt-4 -mx-2">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/suryakkumar/"
                  >
                    <AiFillLinkedin className="text-2xl text-white" />
                  </Link>
                </div>
              </div>
              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 ">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src={Deekshita.src}
                    alt="Deekshita"
                    width={96}
                    height={96}
                    objectFit="cover"
                    layout="fixed"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-300 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Deekshita Shankar
                    </h1>

                    <p className="mt-2 text-gray-300 capitalize  group-hover:text-gray-300">
                      Business Studies Counsellor
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-300   group-hover:text-gray-300">
                  Guiding and Mentoring Students to achieve their Academic and
                  Professional Goals to prestigious Business Schools Worldwide.
                </p>

                <div className="flex mt-4 -mx-2">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/deekshitavshankar/"
                  >
                    <AiFillLinkedin className="text-2xl text-white" />
                  </Link>
                </div>
              </div>
              <div className="px-12 py-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 ">
                <div className="flex flex-col sm:-mx-4 sm:flex-row">
                  <Image
                    className="flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300"
                    src={Faisal.src}
                    alt="Faisal"
                    width={96}
                    height={96}
                    objectFit="cover"
                    layout="fixed"
                  />

                  <div className="mt-4 sm:mx-4 sm:mt-0">
                    <h1 className="text-xl font-semibold text-gray-300 capitalize md:text-2xl dark:text-white group-hover:text-white">
                      Faisal
                    </h1>

                    <p className="mt-2 text-gray-300 capitalize  group-hover:text-gray-300">
                      Engineering and Sciences Counsellor
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-gray-300   group-hover:text-gray-300">
                  Been instrumental in shaping the futures of countless Students
                  pursuing Careers in STEM fields.
                </p>

                <div className="flex mt-4 -mx-2">
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/mohamed-faisal-tajudeen-ba1a571b0/"
                  >
                    <AiFillLinkedin className="text-2xl text-white" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white ">
          <div className="container max-w-4xl px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl ">
              Frequently asked questions
            </h1>

            <div className="mt-12 space-y-8">
              <FaqSection />
            </div>
          </div>
        </section>
        <section className="bg-gray-900">
          <div className="container px-6 py-12 mx-auto">
            <div>
              <p className="font-medium text-blue-400">Contact us</p>

              <h1 className="mt-2 text-2xl font-semibold md:text-3xl text-white">
                Get in touch
              </h1>

              <p className="mt-3 text-gray-400">
                Our friendly team is always here to chat.
              </p>
              <button
                onClick={() => Router.push("/contact")}
                className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
              >
                Contact NOW!
              </button>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-white">Email</h2>
                <p className="mt-2 text-gray-400">
                  Our friendly team is here to help.
                </p>
                <Link
                  href='mailto:info@dreamedconsultancy.com"'
                  className="mt-2 text-blue-400"
                >
                  info@dreamedconsultancy.com
                </Link>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-white">Office</h2>
                <p className="mt-2 text-gray-400">Our Locations</p>
                <p className="mt-2 text-blue-400">Chennai, India</p>
                <p className="mt-2 text-blue-400">Gurgaon, India</p>
                <p className="mt-2 text-blue-400">Liverpool, United Kingdom</p>
                <p className="mt-2 text-blue-400">Dallas, United States</p>
                <p className="mt-2 text-blue-400">Kitchener, Canada</p>
              </div>

              <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-white">Phone</h2>
                <p className="mt-2 text-gray-400"> Whatsapp us </p>
                <Link
                  href="https://wa.me/+919884022990"
                  className="mt-2 text-blue-400"
                >
                  +91 9884022990
                </Link>
              </div>
            </div>
          </div>
        </section>
      </motion.main>
    </>
  );
}
