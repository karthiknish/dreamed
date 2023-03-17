import { useState } from "react";
import Image from "next/image";
function Stepone({ formStep, nextFormStep, countries, setCountries }) {
  const handleCountry = (country) => {
    const index = countries.indexOf(country);

    if (index === -1) {
      setCountries([...countries, country]);
    }
  };
  const handleRemoveCountry = (country) => {
    const filteredCountries = countries.filter(
      (selcountry) => selcountry !== country
    );

    setCountries(filteredCountries);
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-10 text-4xl">Interested Countries</h1>
      <div className="flex gap-4 py-20">
        <div
          onClick={() => {
            if (!countries?.includes("United Kingdom")) {
              handleCountry("United Kingdom");
            } else {
              handleRemoveCountry("United Kingdom");
            }
          }}
          className={`flex flex-col items-center shadow-lg rounded p-4 ${
            countries?.includes("United Kingdom") ? "bg-blue-200" : "bg-white"
          }
          }`}
        >
          <Image
            alt="United Kingdom"
            width={100}
            height={100}
            src="https://www.countries-ofthe-world.com/flags-normal/flag-of-United-Kingdom.png"
          />
          <p>UK</p>
        </div>
        <div
          onClick={() => {
            if (!countries?.includes("Canada")) {
              handleCountry("Canada");
            } else {
              handleRemoveCountry("Canada");
            }
          }}
          className={`flex flex-col items-center shadow-lg rounded p-4 ${
            countries?.includes("Canada") ? "bg-blue-200" : "bg-white"
          }`}
        >
          <Image
            width={100}
            alt="Canada"
            height={100}
            src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Canada.png"
          />
          <p>Canada</p>
        </div>
        <div className="flex flex-col items-center shadow-lg rounded p-4">
          <Image
            alt="Australia"
            width={100}
            height={100}
            src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Australia.png"
          />
          <p>Australia</p>
        </div>
        <div className="flex flex-col items-center shadow-lg rounded p-4">
          <Image
            alt="United States"
            width={100}
            height={100}
            src="https://www.countries-ofthe-world.com/flags-normal/flag-of-United-States-of-America.png"
          />
          <p>USA</p>
        </div>
        <div className="flex flex-col items-center shadow-lg rounded p-4">
          <Image
            alt="Ireland"
            width={100}
            height={100}
            src="https://www.countries-ofthe-world.com/flags-normal/flag-of-Ireland.png"
          />{" "}
          <p>Ireland</p>
        </div>
      </div>
      <button onClick={() => nextFormStep()}>Next</button>
    </div>
  );
}

export default Stepone;
