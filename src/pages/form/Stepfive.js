import { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="min-h-screen max-w-md mx-auto flex flex-col items-center space-y-4">
      <h2 className="text-xl font-semibold">Previous Degree Type</h2>
      <div className="flex space-x-4">
        {DEGREE.map((d) => (
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            key={d.value}
            className={`px-4 py-4 font-semibold  rounded-lg shadow-md focus:outline-none transition-colors duration-200 ease-in-out ${
              degreetype === d.name ? "bg-blue-500 text-white" : "bg-gray-100"
            } hover:bg-blue-100`}
            onClick={() => setDegreetype(d.name)}
          >
            {d.name}
          </motion.button>
        ))}
      </div>
      <h2 className="text-xl font-semibold">Previous Qualification</h2>
      <input
        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
          qualifyError ? "border-red-500" : ""
        }`}
        type="text"
        id="qualify"
        value={qualify}
        onChange={(e) => setQualify(e.target.value)}
      />
      {qualifyError && <p className="text-red-500 text-xs">{qualifyError}</p>}
      <h2 className="text-xl font-semibold">Backlog</h2>
      <input
        type="number"
        value={backlog}
        onChange={(e) => setBacklog(e.target.value)}
        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
          backlogError ? "border-red-500" : ""
        }`}
      />
      {backlogError && <p className="text-red-500 text-xs">{backlogError}</p>}
      <h2 className="text-xl font-semibold">CGPA</h2>
      <input
        type="number"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
        className={`block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring ${
          cgpaError ? "border-red-500" : ""
        }`}
      />
      {cgpaError && <p className="text-red-500 text-xs">{cgpaError}</p>}
      <button
        onClick={() => nextFormStep()}
        className="px-4 py-2 mt-4 font-semibold text-white bg-blue-500 rounded-lg shadow-md focus:outline-none hover:bg-blue-600"
      >
        Next
      </button>
    </div>
  );
}

export default Stepfive;
