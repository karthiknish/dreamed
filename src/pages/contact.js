import { useState } from "react";
import Head from "next/head";
const COUNTRY_CODES = [
  { code: "+91", name: "India" },
  { code: "+1", name: "United States" },
  { code: "+44", name: "United Kingdom" },
  { code: "+61", name: "Australia" },
  { code: "+81", name: "Japan" },
  { code: "+86", name: "China" },
];
const COUNTRIES = [
  { code: "us", name: "United States" },
  { code: "uk", name: "United Kingdom" },
  { code: "au", name: "Australia" },
  { code: "jp", name: "Japan" },
  { code: "cn", name: "China" },
];

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0].code);
  const [countries, setCountries] = useState([]);
  const [study, setStudy] = useState("");
  const [time, setTime] = useState("");
  const handleCountryChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCountries([...countries, value]);
    } else {
      setCountries(countries.filter((c) => c !== value));
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Countries: ${countries}`);
    console.log(`Study: ${study}`);
    console.log(`Time: ${time}`);
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-slate-100">
        <form onSubmit={handleSubmit} className="py-5">
          <h1 className="font-extrabold text-center text-6xl mb-2 text-gray-800">
            Contact
          </h1>
          <div className="max-w-md flex flex-col mx-auto border shadow  bg-white border-gray-200 rounded-lg p-5">
            <label className="text-gray-700" htmlFor="name">
              Name:
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />

            <label className="text-gray-700" htmlFor="email">
              Email:
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />

            <label className="text-gray-700" htmlFor="phone">
              Phone:
            </label>
            <div className="flex">
              <select
                id="countryCode"
                value={countryCode}
                onChange={(event) => setCountryCode(event.target.value)}
              >
                {COUNTRY_CODES.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.name} ({country.code})
                  </option>
                ))}
              </select>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                type="tel"
                id="phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>

            <fieldset>
              <legend className="text-gray-700">Interested Countries:</legend>
              {COUNTRIES.map((country) => (
                <div key={country.code}>
                  <input
                    className="mr-2"
                    type="checkbox"
                    id={`country-${country.code}`}
                    value={country.name}
                    checked={countries.includes(country.name)}
                    onChange={handleCountryChange}
                  />
                  <label
                    className="text-black"
                    htmlFor={`country-${country.code}`}
                  >
                    {country.name}
                  </label>
                </div>
              ))}
            </fieldset>

            <label className="text-gray-700" htmlFor="study">
              Choice of Study:
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="text"
              id="study"
              value={study}
              onChange={(event) => setStudy(event.target.value)}
            />

            <label htmlFor="time">Good Time to Reach You:</label>
            <input
              className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   "
              type="datetime-local"
              id="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
            />
            <div className="flex justify-center mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Submit
              </button>
            </div>
          </div>
        </form>
      </body>
    </>
  );
};

export default ContactForm;
