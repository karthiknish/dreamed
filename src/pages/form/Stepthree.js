import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
function Stepthree({ dob, setDob, formStep, nextFormStep }) {
  const [cal, setCal] = useState("");
  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setCal(newValue);
    setDob(cal.startDate);
  };

  return (
    <div className="flex flex-col items-center max-w-sm mx-auto">
      Date of Birth
      <Datepicker
        asSingle={true}
        useRange={false}
        primaryColor={"fuchsia"}
        value={cal}
        onChange={handleValueChange}
      />{" "}
      <button onClick={() => nextFormStep()}>Next</button>
    </div>
  );
}

export default Stepthree;
