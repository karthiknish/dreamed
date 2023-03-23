import logo from "../assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import { AiFillInstagram } from "react-icons/ai";
function Footer() {
  return (
    <footer className="bg-white ">
      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <Link href="/">
            <Image
              width="100"
              height="100"
              className="w-auto h-7"
              src={logo.src}
              alt=""
            />
          </Link>

          <div className="flex flex-wrap justify-center mt-6 -mx-4">
            <Link
              href="/"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500  "
              aria-label="Reddit"
            >
              {" "}
              Home{" "}
            </Link>

            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 "
              aria-label="Reddit"
            >
              {" "}
              About{" "}
            </a>

            <a
              href="#"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 "
              aria-label="Reddit"
            >
              {" "}
              Teams{" "}
            </a>

            <Link
              href="/privacy"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 "
              aria-label="Reddit"
            >
              {" "}
              Privacy{" "}
            </Link>

            <Link
              href="/cookies"
              className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 "
              aria-label="Reddit"
            >
              {" "}
              Cookies{" "}
            </Link>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-10 " />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2023. All Rights Reserved.
          </p>

          <div className="flex -mx-2">
            <Link
              target="_blank"
              href="https://instagram.com/dreamedconsultancy?igshid=YmMyMTA2M2Y="
            >
              <AiFillInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
