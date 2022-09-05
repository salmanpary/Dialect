import React from "react";
import { Widget } from "@typeform/embed-react";
import { PopupButton } from "@typeform/embed-react";
import { useMediaQuery } from "usehooks-ts";
const Typeform = () => {
    const matches = useMediaQuery("(max-width: 576px)");
    const [style,setstyle]=React.useState("margin")
    React.useEffect(()=>{
        if(!matches){
            setstyle("margin")
        }
        else{
            setstyle("mx-4")
        }
    }
    ,[matches])
  return (
    <div className="bg-gradient-to-l from-wrappergrey md:bg-none">

    <div className="py-10">
      <div className={`text-center ${style}`}>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-4xl md:text-3xl">Contact Us</h1>
          <h2 className="text-3xl md:text-2xl">{"We'd love to hear from you "}</h2>
        </div>
        <Widget id="foNXRbPs" className="h-[515px] mt-10" />
      </div>
    </div>
    </div>

  );
};

export default Typeform;
