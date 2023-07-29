import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <motion.div className={`w-10 h-6 rounded-full transition-colors duration-300 ${isChecked ? "bg-indigo-600" : "bg-gray-200"}`} layout>
        <motion.div className={`w-4 h-4 rounded-full bg-white shadow transition-transform duration-300 ${isChecked ? "translate-x-4" : "translate-x-0"}`} />
      </motion.div>
      <span>{isChecked ? "ON" : "OFF"}</span>
      <input type="checkbox" checked={isChecked} onChange={toggleCheckbox} className="hidden" />
    </label>
  );
};

export default Toggle;
