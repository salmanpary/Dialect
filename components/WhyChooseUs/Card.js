import React, { useEffect } from "react";
import { FaBusinessTime } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import {TbCertificate} from "react-icons/tb";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaBookReader } from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";
const Card = ({ roundcolor, heading, content, icon }) => {
  const [color, setcolor] = React.useState(roundcolor);
  const [iconname, seticonname] = React.useState(icon);
  const [iconcomponent, seticoncomponent] = React.useState(null);
  useEffect(() => {
    if (roundcolor === "blue") {
      setcolor("bg-blue");
    }
    if (roundcolor === "green") {
      setcolor("bg-green");
    }
    switch (icon) {
      case "businesstime":
        seticoncomponent(<FaBusinessTime className="text-white" size={25}/>);
        break;
      case "person":
        seticoncomponent(<BsFillPersonFill className="text-white" size={25} />);
        break;
      case "certificate":
        seticoncomponent(<TbCertificate className="text-white" size={25} />);
        break;
      case "time":
        seticoncomponent(<AiOutlineFieldTime className="text-white" size={25}/>);
        break;
      case "book":
        seticoncomponent(<FaBookReader className="text-white" size={25}/>);
        break;
      case "transalate":
        seticoncomponent(
          <img src="/icons/transalate.png" width={35} height={35}></img>
        );
    }
  }, [iconname, roundcolor, heading, content]);
  return (
    <div className="rounded-2xl bg-white p-16 w-[500px] h-[202px] flex flex-col justify-center items-center sm:w-[330px] sm:h-[240px] ">
      <div className="flex gap-x-5 min-w-max md:flex-col md:justify-center md:items-center sm:gap-x-0">
        <div
          className={`rounded-full ${color} w-14 h-14 flex justify-center items-center mt-2`}
        >
          {iconcomponent}
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-xl font-extrabold md:text-center  sm:flex sm:justify-center sm:items-center ">{heading}</div>
          <div className="w-[30ch] text-lg md:text-center md:px-14">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
