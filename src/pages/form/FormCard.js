import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-4 rounded-lg bg-gray-300"
    >
      <motion.div
        initial={{ x: -10, scaleX: 0 }}
        animate={{ x: 0, scaleX: 1 }}
        className="h-4 rounded-lg bg-blue-600"
        style={{ width: `${progressPercentage}%` }}
      ></motion.div>
    </motion.div>
  );
};

function FormCard({ children, currentStep, prevFormStep }) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex flex-col"
    >
      {currentStep > 0 && (
        <>
          {currentStep < 7 && (
            <button className="" onClick={prevFormStep} type="button">
              <IoIosArrowRoundBack className="text-6xl" />
            </button>
          )}
          <div className="mx-auto w-full px-4 pb-4">
            <ProgressBar currentStep={currentStep} totalSteps={7} />
          </div>
        </>
      )}
      {children}
    </motion.div>
  );
}

export default FormCard;
