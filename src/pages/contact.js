import { useState } from "react";
import Head from "next/head";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState([]);
  const [phone, setPhone] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email, query };
    let res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((d) => {
        if (d.success) {
          setMessage(["Your message has been sent", true]);
          setEmail("");
          setQuery("");
          setName("");
        } else {
          setMessage([d.data, false]);
        }
      });
  };
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <section className="bg-slate-100">
        <div className="container px-6 py-12 mx-auto">
          <div className="lg:flex lg:items-center lg:-mx-6">
            <div className="mt-8 lg:w-1/2 lg:mx-6">
              <div className="w-full px-8 py-10 overflow-hidden rounded-lg shadow-2xl bg-gray-900  shadow-black">
                <h1 className="text-2xl font-medium text-white">
                  What do you want to ask
                </h1>

                <form className="mt-6">
                  <div className="flex-1">
                    <label className="block mb-2 text-sm text-gray-200">
                      Full Name
                    </label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      placeholder="Name"
                      className="block w-full px-5 py-3 mt-2  border  rounded-md placeholder-gray-600 bg-gray-800 text-gray-300 border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>

                  <div className="flex-1 mt-6">
                    <label className="block mb-2 text-sm text-gray-200">
                      Email address
                    </label>
                    <input
                      required
                      pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      className="block w-full px-5 py-3 mt-2 border rounded-md placeholder-gray-600 bg-gray-800 text-gray-300 border-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block mt-4 text-sm text-gray-200">
                      Phone
                    </label>
                    <PhoneInput
                      country={"us"} // Sets the default country code, you can change it to your preferred default
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      placeholder="Phone"
                      inputStyle={{
                        width: "100%",
                        padding: "12px 16px",
                        background: "#1F2937",
                        color: "#E5E7EB",
                        border: "1px solid #374151",
                        borderRadius: "0.375rem",
                      }}
                      inputProps={{
                        required: true,
                      }}
                    />
                  </div>

                  <div className="w-full mt-6">
                    <label className="block mb-2 text-sm text-gray-200">
                      Message
                    </label>
                    <textarea
                      required
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      className="block w-full h-32 px-5 py-3 mt-2 border rounded-md md:h-48 placeholder-gray-600 bg-gray-800 text-gray-300 border-gray-700  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  {message[0] && message[1] === true && (
                    <>
                      <div className="flex my-4 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md ">
                        <div className="flex items-center justify-center w-12 bg-emerald-500">
                          <svg
                            className="w-6 h-6 text-white fill-current"
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
                          </svg>
                        </div>

                        <div className="px-4 py-2 -mx-3">
                          <div className="mx-3">
                            <span className="font-semibold text-emerald-500 ">
                              Success
                            </span>
                            <p className="text-sm text-gray-600 ">
                              We received your message
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {console.log(message)}
                  {message[0] && message[1] === false && (
                    <>
                      <div className="flex my-4 w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md ">
                        <div className="flex items-center justify-center w-12 bg-red-500">
                          <svg
                            className="w-6 h-6 text-white fill-current"
                            viewBox="0 0 40 40"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
                          </svg>
                        </div>

                        <div className="px-4 py-2 -mx-3">
                          <div className="mx-3">
                            <span className="font-semibold text-red-500 ">
                              Error
                            </span>
                            <p className="text-sm text-gray-600 ">
                              {message[0]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    get in touch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
