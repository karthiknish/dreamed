import { useState } from "react";
import {
  MdEngineering,
  MdOutlineBiotech,
  MdArchitecture,
  MdBusinessCenter,
} from "react-icons/md";
import { GrCloudComputer } from "react-icons/gr";
import { GiReceiveMoney } from "react-icons/gi";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { RiHotelLine } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
function Stepfour({
  course1,
  course2,
  setCourse1,
  setCourse2,
  formStep,
  nextFormStep,
}) {
  const [but, setBut] = useState(0);
  const [prog, setProg] = useState("");
  return (
    <div className="flex bg-slate-50 flex-col items-center p-2">
      <h1 className="text-2xl mb-3">Interested programs</h1>
      <div className="lg:grid w-full lg:w-auto lg:grid-cols-3 flex flex-col p-4 items-center gap-4 lg:gap-12">
        <div className="w-full">
          <div
            onClick={() => {
              if (but === 1) {
                setBut(0);
              } else {
                setBut(1);
              }
            }}
            className={`flex justify-center items-center gap-2 w-full z-10 shadow-md p-4 rounded-lg ${
              but === 1 ? "bg-blue-100" : "bg-white"
            }`}
          >
            <MdEngineering className="text-4xl" /> Engineering
          </div>

          {but === 1 && (
            <div className="flex flex-col items-center w-full">
              <>{course1[0] === "Engineering" && course1[1]}</>
              <div className="flex w-full lg:px-0 px-10">
                {" "}
                <input
                  value={prog}
                  onChange={(e) => setProg(e.target.value)}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                />
                {console.log(course1)}
                <button
                  onClick={() => {
                    if (!course1.length) {
                      setBut(0);
                      setCourse1(["Engineering", prog]);
                      setProg("");
                    }
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-2 w-full bg-white shadow-md p-4 rounded-lg">
          <GrCloudComputer className="text-4xl" /> Computing and IT
        </div>
        <div className="flex justify-center items-center gap-2 w-full bg-white shadow-md p-4 rounded-lg">
          <MdOutlineBiotech className="text-4xl" />
          BioScience
        </div>
        <div className="flex justify-center items-center gap-2 w-full bg-white shadow-md p-4 rounded-lg">
          <MdArchitecture className="text-4xl" />
          Architecture
        </div>
        <div className="flex justify-center items-center gap-2 w-full bg-white shadow-md p-4 rounded-lg">
          <MdBusinessCenter className="text-4xl" />
          Business Studies
        </div>
        <div className="flex justify-center items-center gap-2 w-full bg-white shadow-md p-4 rounded-lg">
          <BsFillJournalBookmarkFill className="text-4xl" />
          Arts
        </div>
        <div className="flex justify-center items-center gap-2 w-full bg-white shadow-md p-4 rounded-lg">
          <GiReceiveMoney className="text-4xl" />
          Finance
        </div>
        <div className="flex justify-center items-center gap-2 bg-white shadow-md w-full p-4 rounded-lg">
          <RiHotelLine className="text-4xl" />
          Hospitality
        </div>
        <div className="flex justify-center items-center gap-2 bg-white shadow-md p-4 w-full rounded-lg">
          <GoLaw className="text-4xl" />
          Law
        </div>
      </div>
    </div>
  );
}

export default Stepfour;
