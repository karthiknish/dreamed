import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { motion } from "framer-motion";
function Stepseven({
  time,
  setTime,
  formStep,
  nextFormStep,
  handleSubmit,
  message,
  setMessage,
  date,
  setDate,
  am,
  setAm,
  hrs,
  setHrs,
}) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="max-w-sm mx-auto flex flex-col items-center gap-4"
    >
      Good Time to Reach You:
      <Datepicker
        asSingle={true}
        useRange={false}
        placeholder={date?.length && date}
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
      </div>{" "}
      {message && (
        <p className="mt-4 text-red-500 transition duration-300 ease-in-out">
          {message}
        </p>
      )}
      <button
        className="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        onClick={(e) => {
          setTime(date + hrs + am);
          handleSubmit(e);
        }}
      >
        Next
      </button>
    </motion.div>
  );
}

export default Stepseven;
