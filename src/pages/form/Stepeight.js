import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
function Stepeight() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="min-h-screen pt-4 flex flex-col gap-4 max-w-sm items-center mx-auto"
    >
      <h1 className="text-4xl font-medium">Thank you for your Info</h1>
      <Link
        className="bg-blue-900 hover:bg-blue-700 p-4 rounded-lg shadow-lg text-white"
        href="https://booking.setmore.com/scheduleappointment/69d8da9c-5e7e-4e28-a1b9-51d9da1449e5?source=instagram&instant_experiences_enabled=true"
      >
        Book your counselling now!
      </Link>
    </motion.div>
  );
}

export default Stepeight;
