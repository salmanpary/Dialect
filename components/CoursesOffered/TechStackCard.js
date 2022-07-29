import React, { useEffect } from "react";
import LandingPageData from "../data/LandingPageData";

const TechStackCard = ({ icon, heading, content }) => {
  
  const [iconcomponent, seticoncomponent] = React.useState(null);
  useEffect(() => {
    switch (icon) {
      case "python":
        seticoncomponent(
          <img src="/icons/python.png" width={62} height={62}></img>
        );
        break;
      case "flutter":
        seticoncomponent(
          <img src="/icons/flutter.png" width={53} height={64}></img>
        );
        break;
      case "react":
        seticoncomponent(
          <img src="/icons/react.png" width={70} height={61}></img>
        );
    }
  },[icon]);
  
  return (
    <div className="flex flex-col gap-4 border rounded-xl w-[349px] h-[290px] p-10 relative md:w-auto md:h-auto md:mx-2">
      {iconcomponent}
      {icon === "python" && (
        <div className="absolute bg-green w-[349px] h-[11px] top-[-1px] left-[-1px] rounded-t-xl md:hidden "></div>
      )}

      <div className="text-2xl font-bold">{heading}</div>
      <div className="text-lg text-grey md:text-sm">{content}</div>
    </div>
  );
};

export default TechStackCard;
