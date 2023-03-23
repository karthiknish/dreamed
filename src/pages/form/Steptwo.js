import { useState } from "react";
function Steptwo({ pno, setPno, formStep, nextFormStep, message, setMessage }) {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const COUNTRY_CODES = [
    { code: "+91", name: "India" },
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+61", name: "Australia" },
    { code: "+81", name: "Japan" },
    { code: "+86", name: "China" },
  ];
  const handlePhone = () => {
    setPno(countryCode + phone);
  };
  const validatePhone = () => {
    if (phone.length !== 10 || isNaN(phone)) {
      setMessage("Please enter a valid phone number");
    } else {
      setMessage("");
      nextFormStep();
      handlePhone();
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="flex max-w-sm">
        <select
          id="countryCode"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="block w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        >
          {COUNTRY_CODES.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name} ({country.code})
            </option>
          ))}
        </select>
        <input
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      {message && (
        <p className="mt-4 text-red-500 transition duration-300 ease-in-out">
          {message}
        </p>
      )}
      <button
        onClick={validatePhone}
        className="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Steptwo;
