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
const DEGREE = [
  { value: 1, name: "4 year degree" },
  { value: 2, name: "3 year degree" },
  { value: 3, name: "High school" },
  { value: 4, name: "Masters degree(Full time/Part Time)" },
];
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pno, setPno] = useState("");
  const [countryCode, setCountryCode] = useState(COUNTRY_CODES[0].code);
  const [countries, setCountries] = useState([]);
  const [course1, setCourse1] = useState("");
  const [course2, setCourse2] = useState("");
  const [time, setTime] = useState("");
  const [dob, setDob] = useState("");
  const [degreetype, setDegreetype] = useState("");
  const [cgpa, setCgpa] = useState("");
  const [ielts, setIelts] = useState("");
  const [ieltsbool, setIeltsbool] = useState("");
  const [gre, setGre] = useState("");
  const [grebool, setGrebool] = useState("");
  const [visa, setVisa] = useState("");
  const [visabool, setVisabool] = useState("");
  const [english, setEnglish] = useState("");
  const [qualify, setQualify] = useState("");
  const [backlog, setBacklog] = useState("");
  const [message, setMessage] = useState("");
  const handleCountryChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCountries([...countries, value]);
    } else {
      setCountries(countries.filter((c) => c !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!pno <= 10) {
      setMessage("enter valid number");
    } else {
      const phone = countryCode + pno;
      const data = {
        name,
        email,
        phone,
        degreetype,
        countries,
        qualify,
        dob,
        cgpa,
        gre,
        grebool,
        ielts,
        ieltsbool,
        visa,
        visabool,
        course1,
        course2,
        english,
        backlog,
        time,
      };

      let res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((e) => console.table(e));
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <form onSubmit={handleSubmit} className="py-5 bg-slate-100">
        <h1 className="font-extrabold text-center text-6xl mb-2 text-gray-800">
          Contact
        </h1>
        <div className="max-w-md flex flex-col mx-auto border shadow bg-white border-gray-200 rounded-lg p-5">
          <label className="text-gray-700" htmlFor="name">
            Name (as per passport):
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-gray-700" htmlFor="email">
            Email:
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-gray-700 pt-2" htmlFor="phone">
            Phone (Whatsapp):
          </label>
          <div className="flex">
            <select
              id="countryCode"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              {COUNTRY_CODES.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name} ({country.code})
                </option>
              ))}
            </select>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="number"
              id="phone"
              value={pno}
              onChange={(e) => setPno(e.target.value)}
            />
          </div>
          <label className="text-gray-700 pt-2" htmlFor="qualify">
            Previous qualification:
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            type="text"
            id="qualify"
            value={qualify}
            onChange={(e) => setQualify(e.target.value)}
          />
          <legend className="text-gray-700 py-2" htmlFor="degreetype">
            Degree type:
          </legend>
          {DEGREE.map((d) => (
            <div key={d.value}>
              <input
                className="mr-2"
                id={`d-${d.value}`}
                type="radio"
                value={d.name}
                name="degreetype"
                onChange={(e) => setDegreetype(e.target.value)}
              />
              <label htmlFor={`degree-${d.value}`} className="text-black">
                {d.name}
              </label>
            </div>
          ))}
          <label className="text-gray-700 pt-2">Date of Birth:</label>
          <input
            value={dob}
            max={new Date().toISOString().slice(0, -8).split("T")[0]}
            onChange={(e) => setDob(e.target.value)}
            className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   "
            type="date"
          />
          <label className="text-gray-700 pt-2">CGPA or % scored:</label>
          <input
            type="number"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
          />
          <label className="text-gray-700 pt-2">IELTS scored:</label>
          <div className="flex-col py-1 space-x-2">
            <>
              <input
                name="ielts"
                value={ieltsbool}
                onChange={() => setIeltsbool(true)}
                type="radio"
              />
              <label>Yes</label>
            </>

            <>
              <input
                name="ielts"
                value={ieltsbool}
                onChange={() => setIeltsbool(false)}
                type="radio"
              />
              <label className="">No</label>
            </>
            {ieltsbool && (
              <input
                type="number"
                placeholder="Enter the score"
                value={ielts}
                onChange={(e) => setIelts(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            )}
          </div>
          <label className="text-gray-700 pt-2">GRE/GMAT score:</label>
          <div className="flex-col py-1 space-x-2">
            <>
              <input
                name="gre"
                value={grebool}
                onChange={() => setGrebool(true)}
                type="radio"
              />
              <label>Yes</label>
            </>

            <>
              <input
                name="gre"
                value={grebool}
                onChange={() => setGrebool(false)}
                type="radio"
              />
              <label className="">No</label>
            </>
            {grebool && (
              <input
                type="number"
                placeholder="Enter the score"
                value={gre}
                onChange={(e) => setGre(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            )}
          </div>
          <label className="text-gray-700 pt-2">
            English Score(12th Grade):
          </label>
          <input
            type="number"
            value={english}
            onChange={(e) => setEnglish(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
          />
          <label className="text-gray-700 pt-2">
            Number of Backlogs(0 if none):
          </label>
          <input
            type="number"
            value={backlog}
            onChange={(e) => setBacklog(e.target.value)}
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
          />
          <label className="text-gray-700 pt-2">Visa applied before?:</label>
          <div className="flex-col py-1 space-x-2">
            <>
              <input
                name="visa"
                value={visabool}
                onChange={() => setVisabool(true)}
                type="radio"
              />
              <label>Yes</label>
            </>
            <>
              <input
                name="visa"
                value={visabool}
                onChange={() => setVisabool(false)}
                type="radio"
              />
              <label className="">No</label>
            </>
            {visabool && (
              <input
                placeholder="Enter the country"
                value={visa}
                onChange={(e) => setVisa(e.target.value)}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            )}
          </div>
          <fieldset>
            <legend className="text-gray-700 py-2">
              Interested Countries:
            </legend>
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
            Choice of Study (Priority 1):
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            type="text"
            id="course1"
            value={course1}
            onChange={(e) => setCourse1(e.target.value)}
          />
          <label className="text-gray-700" htmlFor="study">
            Choice of Study (Priority 2):
          </label>
          <input
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
            type="text"
            id="course2"
            value={course2}
            onChange={(e) => setCourse2(e.target.value)}
          />
          <label htmlFor="time">Good Time to Reach You:</label>
          {console.log()}
          <input
            min={new Date().toISOString().slice(0, -8)}
            className="block mt-2 w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40   "
            type="datetime-local"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          {console.log(time)}
          {message && (
            <div className="flex text-red-600 bg-red-100 border-2 border-red-200 rounded p-1 my-2  justify-center">
              {message}
            </div>
          )}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
