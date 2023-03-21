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
    if (!dob) {
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
    <div className="flex flex-col items-center max-w-sm mx-auto">
      <label htmlFor="dob">Date of Birth</label>
      <Datepicker
        asSingle={true}
        useRange={false}
        value={dob}
        primaryColor={"blue"}
        placeholder={dob?.length && dob}
        onChange={(e) => setDob(e.startDate)}
      />
      {message && <p className="text-red-500 text-sm mt-2">{message}</p>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Stepthree;
