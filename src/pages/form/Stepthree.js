import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
function Stepthree({ dob, setDob, formStep, nextFormStep }) {
  

  return (
    <div className="flex flex-col items-center max-w-sm mx-auto">
      Date of Birth
      <Datepicker
        asSingle={true}
        useRange={false}
        value={dob}
        primaryColor={"blue"}
        placeholder={dob?.length && dob}
        onChange={(e) => setDob(e.startDate)}
      />
      <button onClick={() => nextFormStep()}>Next</button>
    </div>
  );
}

export default Stepthree;
