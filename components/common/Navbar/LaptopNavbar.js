import React from "react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
import { useSelector, useDispatch } from "react-redux";
import { home, faq, contact } from "../../../redux/features/navbar/navbarSlice";
import { useRouter } from "next/router";
const LaptopNavbar = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.navbar.navbar);
  const router = useRouter();
  const matches = useMediaQuery("(max-width: 768px)");
  const [style, setstyle] = React.useState("margin");
  React.useEffect(() => {
    if (!matches) {
      setstyle("margin");
    } else {
      setstyle("mx-10 justify-center flex items-center");
    }
  }, [matches]);

  return (
    <div className="bg-gradient-to-l from-wrappergrey">
      <nav className={`${style} `}>
        <div className="flex justify-between">
          <img src="/icons/logo.png" width={200} height={100} className="cursor-pointer" onClick={()=>{
            router.push('/')
          }}></img>
          <ul className="flex justify-between items-center gap-8 font-semibold text-base">
            <div className="flex flex-col">
              <Link href="/">
                <li
                  className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-blue"
                  onClick={() => dispatch(home())}
                >
                  HOME
                </li>
              </Link>
              <div
                className={` w-4 h-1 ${
                  router.pathname == "/" ? "bg-blue" : "bg-transparent"
                }`}
              ></div>
            </div>
            <div className="flex flex-col">
              <Link href="/faq">
                <li
                  className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-blue"
                  onClick={() => dispatch(faq())}
                >
                  FAQ
                </li>
              </Link>
              <div
                className={`w-4 h-1 ${
                  router.pathname == "/faq" ? "bg-blue" : "bg-transparent"
                }`}
              ></div>
            </div>
            <div className="flex flex-col">
              <Link href="/contact">
                <li
                  className="hover:cursor-pointer transition ease-in-out  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-blue"
                  onClick={() => dispatch(contact())}
                >
                  CONTACT US
                </li>
              </Link>
              <div
                className={` w-4 h-1 ${
                  router.pathname == "/contact" ? "bg-blue" : "bg-transparent"
                }`}
              ></div>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default LaptopNavbar;
