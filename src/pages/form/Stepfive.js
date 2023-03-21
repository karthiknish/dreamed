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
  const [qualifyError, setQualifyError] = useState("");
  const [backlogError, setBacklogError] = useState("");
  const [cgpaError, setCgpaError] = useState("");
  const handleNext = () => {
    // Validate inputs
    let isValid = true;

    if (!qualify) {
      setQualifyError("Please enter your previous qualification");
      isValid = false;
    } else {
      setQualifyError("");
    }

    if (isNaN(backlog) || backlog < 0) {
      setBacklogError("Please enter a valid number of backlogs");
      isValid = false;
    } else {
      setBacklogError("");
    }

    if (isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      setCgpaError("Please enter a valid CGPA between 0 and 10");
      isValid = false;
    } else {
      setCgpaError("");
    }

    if (isValid) {
      nextFormStep();
    }
  };
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
        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring ${
          qualifyError ? "border-red-500" : ""
        }`}
        type="text"
        id="qualify"
        value={qualify}
        onChange={(e) => setQualify(e.target.value)}
      />
      {qualifyError && <p className="text-red-500 text-xs">{qualifyError}</p>}
      Backlog
      <input
        type="number"
        value={backlog}
        onChange={(e) => setBacklog(e.target.value)}
        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring ${
          backlogError ? "border-red-500" : ""
        }`}
      />
      {backlogError && <p className="text-red-500 text-xs ">{backlogError}</p>}
      CGPA
      <input
        type="number"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring ${
          cgpaError ? "border-red-500" : ""
        }`}
      />
      {cgpaError && <p className="text-red-500 text-xs">{backlogError}</p>}
      <button onClick={() => nextFormStep()}>Next</button>
    </div>
  );
}

export default Stepfive;
