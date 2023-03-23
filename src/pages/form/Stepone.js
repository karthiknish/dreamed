import Image from "next/image";

function Stepone({
  formStep,
  nextFormStep,
  countries = [],
  setCountries,
  message,
  setMessage,
}) {
  const count = [
    {
      name: "UK",
      flagUrl:
        "https://www.countries-ofthe-world.com/flags-normal/flag-of-United-Kingdom.png",
    },
    {
      name: "Canada",
      flagUrl:
        "https://www.countries-ofthe-world.com/flags-normal/flag-of-Canada.png",
    },
    {
      name: "Australia",
      flagUrl:
        "https://www.countries-ofthe-world.com/flags-normal/flag-of-Australia.png",
    },
    {
      name: "United States",
      flagUrl:
        "https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png",
    },
    {
      name: "Ireland",
      flagUrl:
        "https://www.countries-ofthe-world.com/flags-normal/flag-of-Ireland.png",
    },
  ];
  const handleCountry = (country) => {
    setCountries((prevCountries) =>
      prevCountries.includes(country)
        ? prevCountries.filter((c) => c !== country)
        : [...prevCountries, country]
    );
  };

  const validateStep = () => {
    if (countries.length === 0) {
      setMessage("Please select at least one country.");
      return false;
    }
    setMessage("");
    return true;
  };
  const handleNextStep = () => {
    if (validateStep()) {
      nextFormStep();
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="mt-10 text-4xl">Interested Countries</h1>
      <div className="flex flex-wrap gap-4 py-20">
        {count.map((country) => (
          <div
            key={country.name}
            onClick={() => handleCountry(country.name)}
            className={`flex flex-col items-center shadow-lg rounded p-4 transition duration-300 ease-in-out transform hover:scale-105 ${
              countries.includes(country.name) ? "bg-blue-200" : "bg-white"
            }`}
          >
            <Image
              alt={country.name}
              width={100}
              height={100}
              src={country.flagUrl}
            />
            <p className="mt-2 text-gray-700">{country.name}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleNextStep}
        className="px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Next
      </button>
      {message && (
        <p className="mt-4 text-red-500 transition duration-300 ease-in-out">
          {message}
        </p>
      )}
    </div>
  );
}

export default Stepone;
