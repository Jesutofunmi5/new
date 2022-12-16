import type { FC } from "react";

interface Props {
  title: string;
  pricing: string | number;
  basic: string;
}

const PricingCard: FC<Props> = ({ title, pricing, basic }) => {
  return (
    <div className="border-solid border-[1px] rounded-[8px] p-5 m-3 border-[#8E8E93] w-[100%] ">
      <div className="flex justify-between">
        <h1 className="font-[700] text-[36px] text-[#41723]">{title}</h1>
        <h1 className="font-[700] text-[36px] text-[#07AA3D]">{pricing}</h1>
      </div>

      <p className="flex flex-row justify-center items-center font-[400] text-[18px] text-[#041723] w-[251px] h-[43px] border-solid border-[1px] border-[#8E8E93] rounded-[8px]">
        {basic}
      </p>
      <div className="mt-6">
        <p className="font-[400] text-[18px] text-[#041723] flex-none flex-grow-0">
          1 hour meeting limit
        </p>
        <p className="mt-2 font-[400] text-[18px] text-[#041723] flex-none flex-grow-0">
          100 attendees
        </p>
        <p className="mt-2 font-[400] text-[18px] text-[#041723] flex-none flex-grow-0">Chat box</p>
        <p className="mt-2 font-[400] text-[18px] text-[#041723] flex-none flex-grow-0">
          collaboration and file sharing
        </p>
        <p className="mt-2 font-[400] text-[18px] text-[#041723] flex-none flex-grow-0">
          collaboration and file sharing
        </p>
        <p className="mt-2 font-[400] text-[18px] text-[#041723] flex-none flex-grow-0">
          collaboration and file sharing
        </p>
        <p className="mt-2 font-[400] text-[18px] text-[#041723] flex-none flex-grow-0">
          collaboration and file sharing
        </p>
      </div>
      <p className="text-[#07AA3D] font-[400] text-[18px] mt-4 cursor-pointer">See Details</p>
    </div>
  );
};

export default PricingCard;
