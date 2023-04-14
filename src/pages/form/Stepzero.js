import { useState } from "react";

function Stepzero({
  setName,
  setEmail,
  name,
  email,
  nextFormStep,
  message,
  setMessage,
}) {
  const validateEmail = (email) => {
    const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      setMessage("Please enter a name");
    } else if (!validateEmail(email)) {
      setMessage("Please enter a valid email address");
    } else {
      setMessage("");
      nextFormStep();
    }
  };

  return (
    <div className="min-h-screen max-w-lg mx-auto flex flex-col items-center">
      <input
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {message && (
        <p className="mt-4 text-red-500 transition duration-300 ease-in-out">
          {message}
        </p>
      )}
      <button
        onClick={handleSubmit}
        className="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Next
      </button>
    </div>
  );
}

export default Stepzero;
