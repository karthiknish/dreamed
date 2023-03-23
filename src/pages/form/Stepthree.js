import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
function Stepthree({
  dob,
  setDob,
  formStep,
  nextFormStep,
  message,
  setMessage,
}) {
  const handleNext = () => {
    if (!dob || dob === "" || dob === null) {
      setMessage("Please select your date of birth.");
      return;
    }
    const ageDiffMs = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(ageDiffMs);
    const age = Math.abs(ageDate.getUTCFullYear() - 1970);

    if (age < 16) {
      setMessage("You must be at least 16 years old to apply.");
      return;
    }

    nextFormStep();
    setMessage("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center max-w-sm mx-auto">
      <label htmlFor="dob" className="text-sm font-medium text-gray-700">
        Date of Birth
      </label>

      <Datepicker
        asSingle={true}
        useRange={false}
        value={dob}
        primaryColor={"blue"}
        placeholder={dob?.length && dob}
        onChange={(e) => setDob(e.startDate)}
        className="w-full py-2 pl-3 pr-10 mt-1 text-base text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
      />
      {message && (
        <p className="mt-4 text-red-500 transition duration-300 ease-in-out">
          {message}
        </p>
      )}
      <button
        onClick={handleNext}
        className="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Stepthree;
