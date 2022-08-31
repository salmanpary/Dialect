import React from "react";

const AddressCard = () => {
  return (
    <div className="">
      <div className="bg-darkblue text-white text-xl rounded-xl px-7 py-10 flex flex-col gap-7">
        <div>Kerala Technology Innovation Zone</div>
        <div>Kinfra Hi-Tech Park,Kalamassery,Kochi,India</div>
        <div className="flex gap-4">
          <img src="/images/call.png" alt="" width={30} height={30} />
          (+91) 7736226886
        </div>
        <div className="flex gap-5">
          <img src="/images/message.png" alt="" width={30} height={30} />
          info@zartek.in
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
