import React, { useEffect } from "react";
import { motion } from "framer-motion";
const LearningButton = () => {
  const [buttonstyle, setbuttonstyle] = React.useState("");
  useEffect(() => {
    window.addEventListener("scroll", changeButtonStyle);
  }, []);
  const changeButtonStyle = () => {
    if (window.scrollY > 600) {
      if(window.innerHeight+window.scrollY>document.body.offsetHeight){
        setbuttonstyle("sm:hidden")
      }
      else{
      setbuttonstyle("sm:fixed sm:bottom-8 sm:z-50 sm:w-3/4");
    }
    }
    else{
      setbuttonstyle("");
    }
  };
  return (
    <>
      <a
        href="https://gocollabo.typeform.com/to/foNXRbPs"
        className={buttonstyle}
      >
        <button
          className={`bg-green rounded-[80px] px-8 h-14 flex justify-center items-center shadow-2xl shadow-gray-500 md:w-[100%] cursor-pointer hover:bg-blue transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300`}
        >
          <span className="text-white font-extrabold text-sm">
            Start Learning
          </span>
        </button>
      </a>
    </>
  );
};

export default LearningButton;
