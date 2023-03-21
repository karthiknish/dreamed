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
import { RxCross1 } from "react-icons/rx";

const categories = [
  {
    icon: <MdEngineering className="text-4xl" />,
    name: "Engineering",
  },
  {
    icon: <GrCloudComputer className="text-4xl" />,
    name: "Computing and IT",
  },
  {
    icon: <MdOutlineBiotech className="text-4xl" />,
    name: "BioScience",
  },
  {
    icon: <MdArchitecture className="text-4xl" />,
    name: "Architecture",
  },
  {
    icon: <MdBusinessCenter className="text-4xl" />,
    name: "Business Studies",
  },
  {
    icon: <BsFillJournalBookmarkFill className="text-4xl" />,
    name: "Arts",
  },
  {
    icon: <GiReceiveMoney className="text-4xl" />,
    name: "Finance",
  },
  {
    icon: <RiHotelLine className="text-4xl" />,
    name: "Hospitality",
  },
  {
    icon: <GoLaw className="text-4xl" />,
    name: "Law",
  },
];

const Modal = ({
  category,
  course1,
  setCourse1,
  course2,
  setCourse2,
  prog,
  setProg,
  setshowModal,
}) => {
  const handleAddCourse = () => {
    if (prog.trim().length === 0) {
      alert("Please enter a program name.");
    } else if (!course1?.length) {
      setCourse1([category, prog]);
      setProg("");
      setshowModal(false);
    } else {
      setCourse2([category, prog]);
      setProg("");
      setshowModal(false);
    }
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 flex flex-col items-center w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    {category}
                  </h3>

                  <div className="flex w-full lg:px-0 px-10">
                    <input
                      value={prog}
                      onChange={(e) => setProg(e.target.value)}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                onClick={handleAddCourse}
                type="button"
                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 sm:ml-3 sm:w-auto"
              >
                Add
              </button>
              <button
                onClick={() => setshowModal(false)}
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
function Stepfour({
  course1,
  course2,
  setCourse1,
  setCourse2,
  formStep,
  nextFormStep,
}) {
  const [showModal, setshowModal] = useState(false);
  const [prog, setProg] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const handleNextStep = () => {
    if (!course1.length || !course2.length) {
      setError("Enter 2 courses");
    } else nextFormStep();
  };
  return (
    <div className="flex bg-slate-50 flex-col items-center p-2">
      {showModal && (
        <Modal
          category={category}
          prog={prog}
          setCourse1={setCourse1}
          course1={course1}
          setProg={setProg}
          setshowModal={setshowModal}
          course2={course2}
          setCourse2={setCourse2}
        />
      )}
      <h1 className="text-2xl mb-3">Interested programs</h1>
      <div
        className={`lg:grid w-full lg:w-auto lg:grid-cols-3 flex flex-col p-4 items-center gap-4 lg:gap-12 ${
          course1?.length === 2 && course2?.length === 2
            ? "pointer-events-none blur-sm"
            : ""
        }`}
      >
        {categories.map((category, index) => (
          <div className="w-full" key={index}>
            <div
              onClick={() => {
                setshowModal(true);
                setCategory(category.name);
              }}
              className={`flex justify-center items-center gap-2 w-full z-10 shadow-md p-4 rounded-lg 
        }`}
            >
              {category.icon} {category.name}
            </div>
          </div>
        ))}
      </div>
      {
        <div className="flex">
          <p className="flex">
            {course1}
            {course1?.length !== 0 && (
              <RxCross1 onClick={() => setCourse1([])} />
            )}
          </p>
          <p className="flex">
            {course2}
            {course2?.length !== 0 && (
              <RxCross1 onClick={() => setCourse2([])} />
            )}
          </p>
        </div>
      }
      <button onClick={handleNextStep}>Next</button>
    </div>
  );
}

export default Stepfour;
