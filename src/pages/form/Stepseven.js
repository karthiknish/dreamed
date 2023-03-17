import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function Stepseven({ time, setTime, formStep, nextFormStep, handleSubmit }) {
  const [date, setDate] = useState([]);
  const [am, setAm] = useState("");
  const [hrs, setHrs] = useState("");

  return (
    <div className="max-w-sm mx-auto flex flex-col items-center gap-4">
      Good Time to Reach You:
      <Datepicker
        asSingle={true}
        useRange={false}
        placeholder={date.length && date}
        value={date}
        onChange={(e) => setDate(e.startDate)}
      />
      <div className="flex justify-center">
        <div className="mt-2 p-5 w-40 bg-white rounded-lg shadow-xl">
          <div className="flex">
            <select
              value={hrs}
              onChange={(e) => setHrs(e.target.value)}
              name="hours"
              className="bg-transparent text-xl appearance-none outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">10</option>
              <option value="12">12</option>
            </select>
            <span className="text-xl mr-3">:</span>
            <select
              name="minutes"
              className="bg-transparent text-xl appearance-none outline-none mr-4"
            >
              <option value="0">00</option>
              <option value="30">30</option>
            </select>
            <select
              value={am}
              onChange={(e) => setAm(e.target.value)}
              name="ampm"
              className="bg-transparent text-xl appearance-none outline-none"
            >
              <option value="am">AM</option>
              <option value="pm">PM</option>
            </select>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          nextFormStep();
          setTime(date + hrs + am);
          handleSubmit(e);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Stepseven;
