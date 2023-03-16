import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <div className="flex flex-col">
      {currentStep > 0 && (
        <>
          <button className="" onClick={prevFormStep} type="button">
            <IoIosArrowRoundBack className="text-6xl" />
          </button>
          <span className="mx-auto pb-4 text-2xl">
            Step {currentStep + 1} of 5
          </span>
        </>
      )}
      {children}
    </div>
  );
}

export default FormCard;
