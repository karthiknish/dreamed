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
    <div className="flex gap-4 min-h-screen max-w-sm mx-auto flex-col items-center">
      IELTS
      <div className="flex gap-4 my-2">
        <div
          onClick={() => setIeltsbool(true)}
          className={`px-4 py-4 font-semibold  rounded-lg shadow-md focus:outline-none transition-colors duration-200 ease-in-out ${
            ieltsbool ? "bg-blue-500 text-white" : "bg-gray-100"
          } hover:bg-blue-100`}
        >
          Yes
        </div>
        <div
          onClick={() => setIeltsbool(false)}
          className={`px-4 py-4 font-semibold  rounded-lg shadow-md focus:outline-none transition-colors duration-200 ease-in-out ${
            !ieltsbool ? "bg-blue-500 text-white" : "bg-gray-100"
          } hover:bg-blue-100`}
        >
          No
        </div>
      </div>
      {ieltsbool && (
        <input
          type="number"
          min="0"
          max="9"
          step="0.5"
          placeholder="Enter the score (0-9)"
          value={ielts}
          onChange={(e) => setIelts(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          required
        />
      )}
      GRE/GMAT
      <div className="flex gap-4 my-2">
        <div
          onClick={() => setGrebool(true)}
          className={`px-4 py-4 font-semibold  rounded-lg shadow-md focus:outline-none transition-colors duration-200 ease-in-out ${
            grebool ? "bg-blue-500 text-white" : "bg-gray-100"
          } hover:bg-blue-100`}
        >
          Yes
        </div>
        <div
          onClick={() => setGrebool(false)}
          className={`px-4 py-4 font-semibold  rounded-lg shadow-md focus:outline-none transition-colors duration-200 ease-in-out ${
            !grebool ? "bg-blue-500 text-white" : "bg-gray-100"
          } hover:bg-blue-100`}
        >
          No
        </div>
      </div>
      {grebool && (
        <input
          type="number"
          min="0"
          max="340"
          placeholder="Enter the score (0-340)"
          value={gre}
          onChange={(e) => setGre(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          required
        />
      )}
      English Score
      <input
        type="number"
        value={english}
        onChange={(e) => setEnglish(e.target.value)}
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
      />
      Previous Countries visited with Visa
      <div className="flex gap-4 my-2">
        <div
          onClick={() => setVisabool(true)}
          className={`px-4 py-4 font-semibold  rounded-lg shadow-md focus:outline-none transition-colors duration-200 ease-in-out ${
            visabool ? "bg-blue-500 text-white" : "bg-gray-100"
          } hover:bg-blue-100`}
        >
          Yes
        </div>
        <div
          onClick={() => setVisabool(false)}
          className={`px-4 py-4 font-semibold  rounded-lg shadow-md focus:outline-none transition-colors duration-200 ease-in-out ${
            !visabool ? "bg-blue-500 text-white" : "bg-gray-100"
          } hover:bg-blue-100`}
        >
          No
        </div>
      </div>
      {visabool && (
        <input
          type="text"
          pattern="^[a-zA-Z]+(,[ ]?[a-zA-Z]+)*$"
          placeholder="Enter the country/countries"
          value={visa}
          onChange={(e) => setVisa(e.target.value)}
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
          required
        />
      )}
      <button
        className="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
        disabled={
          (ieltsbool && ielts === "") ||
          (grebool && gre === "") ||
          (visabool && visa === "") ||
          english === ""
        }
        onClick={() => nextFormStep()}
      >
        Next
      </button>
    </div>
  );
}

export default Stepsix;
