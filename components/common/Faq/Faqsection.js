import React from "react";
import Faqs from "./Faqs";
import { useMediaQuery } from "usehooks-ts";
const Faqsection = () => {
  const matches = useMediaQuery("(max-width: 671px)");
  const [style, setstyle] = React.useState("margin");
  React.useEffect(() => {
    if (!matches) {
      setstyle("margin");
    } else {
      setstyle("mx-4");
    }
  }, [matches]);
  return (
    <>
      <div className="mt-10">
        <div className={`flex justify-center flex-col ${style} gap-y-5`}>
          <div className=" flex flex-col justify-center items-center">
            <h2 className="font-extrabold text-faqheading md:text-center md:text-4xl">
              Any questions?
            </h2>
            <h2 className="font-extrabold text-faqheading md:text-center md:text-4xl">
              We got you.
            </h2>
          </div>
          <Faqs />
        </div>
      </div>
    </>
  );
};

export default Faqsection;
