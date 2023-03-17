import { useState } from "react";

function Stepfive({
  qualify,
  degreetype,
  setQualify,
  setDegreetype,
  backlog,
  setBacklog,
  nextFormStep,
  formStep,
  cgpa,
  setCgpa,
}) {
  const DEGREE = [
    { value: 1, name: "4 year degree" },
    { value: 2, name: "3 year degree" },
    { value: 3, name: "High school" },
    { value: 4, name: "Masters degree(Full time/Part Time)" },
  ];
  return (
    <div className="flex items-center flex-col px-10">
      Previous Degree Type
      <div className="flex">
        {DEGREE.map((d) => (
          <div
            key={d.value}
            className={`p-4  shadow-lg rounded mx-4 my-2 pointer-events-auto ${
              degreetype === d.name ? "bg-blue-200" : ""
            }`}
            onClick={() => setDegreetype(d.name)}
          >
            {d.name}
          </div>
        ))}
      </div>
      Previous Qualification
      <input
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
        type="text"
        id="qualify"
        value={qualify}
        onChange={(e) => setQualify(e.target.value)}
      />
      Backlog
      <input
        type="number"
        value={backlog}
        onChange={(e) => setBacklog(e.target.value)}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
      />
      CGPA
      <input
        type="number"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
      />
      <button onClick={() => nextFormStep()}>Next</button>
    </div>
  );
}

export default Stepfive;
