import React from "react";
import { useMediaQuery } from "usehooks-ts";
const AddressCard = () => {
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
  <div className={style}>

    <div className="flex h-auto lg:h-auto lg:gap-6 lg:flex-col pt-10 justify-center items-center">
        <div>

<a href="https://g.page/zartek?share">
        <img src="/images/map.png" alt="" width={700} height={380}/>



</a>
        </div>
       
      <div className="bg-darkblue text-white text-xl md:text-xs rounded-xl px-7 py-10 flex flex-col gap-10 md:gap-4 max-h-80 ml-[-10px] md:ml-0">
        <div>Kerala Technology Innovation Zone</div>
        <div>Kinfra Hi-Tech Park,Kalamassery,Kochi,India</div>
        <div className="flex gap-4">
          <img src="/images/call.png" alt="" width={30} height={30}/>
          <div className="md:pt-1">

          (+91) 7736226886
          </div>
        </div>
        <div className="flex gap-5">
          <img src="/images/message.png" alt="" width={30} height={30} />
          <div className="pt-1">

          info@zartek.in
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default AddressCard;
