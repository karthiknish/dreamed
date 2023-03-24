import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import Router from "next/router";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { Roboto_Slab } from "next/font/google";
const roboto = Roboto_Slab({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});
const Navbar = () => {
  const { data } = useSession();
  useEffect(() => {
    const w = window.innerWidth;
    if (w >= 1024) {
      setIsOpen(true);
    }
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white shadow z-10 sticky top-0">
      <div className="container px-6 py-4 mx-auto ">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/">
              <img
                alt="logo"
                className="w-auto object-contain sm:h-20 xs:w-1/2"
                src={logo.src}
              />
            </Link>
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 "
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {isOpen && (
            <motion.div
              transition={{ delay: -0.5 }}
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center"
            >
              <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                <Link
                  href="/stories"
                  className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                >
                  Success Stories
                </Link>
                {data?.user?.name === "admin" ? (
                  <Link
                    href="/admin"
                    className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                  >
                    Admin
                  </Link>
                ) : data?.user?.name ? (
                  <Link
                    href="/dashboard"
                    className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <></>
                )}
                <Link
                  href="/help"
                  className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                >
                  How can We Help
                </Link>
                <Link
                  href="/sign"
                  className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                >
                  Study Abroad
                </Link>
                <Link
                  href="/career"
                  className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                >
                  Career Studio{" "}
                </Link>
                <Link
                  href="/contact"
                  className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                >
                  Contact
                </Link>
                {!data?.user ? (
                  <Link
                    href="/sign"
                    className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                  >
                    Signin/Register
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      signOut({ callbackUrl: "/", redirect: false });
                      Router.push("/");
                    }}
                    className={`${roboto.className}  px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0  hover:bg-gray-100`}
                  >
                    Signout
                  </button>
                )}
              </div>

              {data?.user && (
                <div className="flex items-center mt-4 lg:mt-0">
                  <button
                    className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block  hover:text-gray-700  focus:text-gray-700 focus:outline-none"
                    aria-label="show notifications"
                  >
                    <svg
                      className="w-6 h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="flex items-center focus:outline-none"
                    aria-label="toggle profile dropdown"
                  >
                    <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                      <Image
                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                        className="object-cover w-full h-full"
                        alt="avatar"
                        width="100"
                        height="100"
                      />
                    </div>

                    <h3 className="mx-2 text-gray-700 lg:hidden">
                      {data?.user.name}
                    </h3>
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
