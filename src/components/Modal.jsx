import React from "react";
import { X } from "react-feather";
import { motion } from "framer-motion";

export default function Modal(props) {
  const { isOpen, onClose, title, children } = props;

  const modalAnimation = {
    hidden: { opacity: 0, y: "-100%" }, // Starts above the screen
    visible: { opacity: 1, y: "0%" }, // Comes down to the center of the screen
  };
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center">
          <div className="absolute w-screen h-screen bg-black inset-0 opacity-80 z-99" onClick={onClose}></div>
          <motion.div initial="hidden" animate="visible" variants={modalAnimation} className="relative bg-[#20262E] rounded-lg pt-3 px-6 pb-6 overflow-hidden">
            <div className="text-gray-50 flex justify-between mb-4">
              <p className="font-bold">{title}</p>
              <X className="cursor-pointer" onClick={onClose} />
            </div>
            {children}
          </motion.div>
        </div>
      )}
    </>
  );
}
