import { useState } from "react";

function Stepsix({
  ielts,
  setIelts,
  ieltsbool,
  setIeltsbool,
  gre,
  setGre,
  grebool,
  setGrebool,
  english,
  setEnglish,
  visa,
  setVisa,
  visabool,
  setVisabool,
  formStep,
  nextFormStep,
}) {
  return (
    <div className="flex flex-col items-center">
      IELTS
      <div className="flex gap-4 my-2">
        <div
          onClick={() => setIeltsbool(true)}
          className={`p-4 items-center shadow-lg rounded ${
            ieltsbool ? "bg-blue-200" : ""
          }`}
        >
          Yes
        </div>
        <div
          onClick={() => setIeltsbool(false)}
          className={`p-4 items-center shadow-lg rounded ${
            !ieltsbool ? "bg-blue-200" : ""
          }`}
        >
          No
        </div>
      </div>
      {ieltsbool && (
        <input
          type="number"
          placeholder="Enter the score"
          value={ielts}
          onChange={(e) => setIelts(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        />
      )}{" "}
      GRE/GMAT
      <div className="flex gap-4 my-2">
        <div
          onClick={() => setGrebool(true)}
          className={`p-4 items-center shadow-lg rounded ${
            grebool ? "bg-blue-200" : ""
          }`}
        >
          Yes
        </div>
        <div
          onClick={() => setGrebool(false)}
          className={`p-4 items-center shadow-lg rounded ${
            !grebool ? "bg-blue-200" : ""
          }`}
        >
          No
        </div>
      </div>
      {grebool && (
        <input
          type="number"
          placeholder="Enter the score"
          value={gre}
          onChange={(e) => setGre(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        />
      )}
      English Score
      <input
        type="number"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
      />
      Visa
      <div className="flex gap-4 my-2">
        <div
          onClick={() => setVisabool(true)}
          className={`p-4 items-center shadow-lg rounded ${
            visabool ? "bg-blue-200" : ""
          }`}
        >
          Yes
        </div>
        <div
          onClick={() => setVisabool(false)}
          className={`p-4 items-center shadow-lg rounded ${
            !visabool ? "bg-blue-200" : ""
          }`}
        >
          No
        </div>
      </div>
      {visabool && (
        <input
          placeholder="Enter the country/countries"
          value={visa}
          onChange={(e) => setVisa(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        />
      )}
      <button onClick={() => nextFormStep()}>Next</button>
    </div>
  );
}

export default Stepsix;
