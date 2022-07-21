import React from "react";
import {FaLinkedinIn} from "react-icons/fa";
import {FaFacebookMessenger} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import { useMediaQuery } from "usehooks-ts";
const Footer = () => {
  const matches = useMediaQuery("(max-width: 576px)");
  return (
    <footer className="flex  flex-col justify-center items-center">
      <div className="flex flex-col gap-y-4">
        <h2 className="font-bold text-xl md:text-center">

          DIALECT
        </h2>
        <div className="flex gap-x-[8.688rem] md:flex-wrap md:justify-center md:items-center">

        <div className="font-medium text-base opacity-40 w-[50ch] md:text-center md:w-[30ch]">
        We at dialect take you through technical learning in your mother tongue to help you build a better conceptual clarity thus making it easier to comprehend.

        </div>
        <div className="flex gap-x-[7.438rem] md:flex-col md:justify-center md:items-center">
          <div className="flex flex-col text-[#454545] font-medium gap-2 md:flex-row md:gap-x-7">
            <a href="">
              FAQ
            </a>
            <a href="" className="whitespace-nowrap">
              Contact Us
            </a>

          </div>
          <div className="flex flex-col text-[#454545] font-medium gap-2 md:flex-row">
            <a href="">
             Privacy Policy
            </a>
            <a href="" className="whitespace-nowrap">
              Terms & Conditions
            </a>

          </div>
          <div className="flex flex-col text-blue gap-4">
            <div className="whitespace-nowrap font-extrabold">
              Become a Teacher
            </div>
            <div className="flex gap-4 md:justify-center md:items-center">
              <FaLinkedinIn  size={20} />
              <FaFacebookMessenger  size={20} />
              <FaTwitter  size={20} />


            </div>
          </div>

        </div>
        </div>
      </div>
      <div className="text-footerblack text-footerelements md:text-center sm:w-[20ch]">
      Copyright @ Dialect. All Rights Reserved -- Made by Zartek

      </div>
    </footer>
  );
};

export default Footer;
