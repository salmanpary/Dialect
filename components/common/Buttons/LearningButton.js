import React from "react";
import { motion } from "framer-motion";
const LearningButton = () => {
  return (
    <>
    <a href="https://gocollabo.typeform.com/to/foNXRbPs">
     <motion.button
    initial={{ scale: 0 }}
    animate={{
      scale: 1,
      transition: { type: "spring", mass: 1.15, delay: 1.2 },
    }}
    whileHover={{ scale: 1.05,translateY:-6,translateX:-6 }}
      whileTap={{ scale: 0.95 }}
    className={`bg-green rounded-[80px] px-8 h-14 flex justify-center items-center shadow-2xl shadow-gray-500 md:w-[100%] cursor-pointer hover:bg-blue transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300`}
  >
    <span className="text-white font-extrabold text-sm">
         Start Learning
        </span>
    
  </motion.button>
  </a>
    </>
  );
};

export default LearningButton;
