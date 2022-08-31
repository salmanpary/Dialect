import React, { useState } from "react";
import { CgMenu } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/router";
const MobileNavbar = () => {
  const [show, setShow] = useState(false);
  const OpenMenu = () => {
    setShow(!show);
  };

  const router = useRouter();
  return (
    <>
      <div className="sticky top-3 z-50">
        <div className="bg-wrappergrey py-2 px-10 rounded-lg my-2 mx-4 flex items-center justify-between ">
          <img src="/icons/logo.png" alt="" width={100} height={100} />
          <div onClick={OpenMenu}>
            {show ? (
              <IoMdClose size={30} className="text-blue" />
            ) : (
              <CgMenu size={30} className="text-blue" />
            )}
          </div>
        </div>
        <div
          className={` bg-wrappergrey py-2 px-4 my-2 mx-4 rounded-lg ${
            !show ? "hidden" : "block"
          }`}
        >
          <ul className="flex flex-col justify-between items-start gap-4 font-semibold text-base ">
            <li
              onClick={() => {
                router.push("/");
              }}
              className={`text-base font-bold ${router.pathname=="/"?"text-blue":""}`}
            >
              HOME
            </li>
            <li
              onClick={() => {
                router.push("/faq");
              }}
              className={`text-base font-bold ${router.pathname=="/faq"?"text-blue":""}`}
            >
              FAQ
            </li>
            <li
              onClick={() => {
                router.push("/contact");
              }}
              className={`text-base font-bold ${router.pathname=="/contact"?"text-blue":""}`}
            >
              CONTACT US
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
