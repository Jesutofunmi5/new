import type { FC } from "react";

const circle = (
  <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.99967 14.1668C11.6663 14.1668 14.6663 11.1668 14.6663 7.50016C14.6663 3.8335 11.6663 0.833496 7.99967 0.833496C4.33301 0.833496 1.33301 3.8335 1.33301 7.50016C1.33301 11.1668 4.33301 14.1668 7.99967 14.1668Z"
      stroke="#041723"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const check = (
  <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.16699 3.49995L3.05366 5.38661L6.83366 1.61328"
      stroke="#041723"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Props {
  title: string;
  pricing: string | number;
  basic: string;
  off: string;
  slash: any;
}

const PricingCard: FC<Props> = ({ title, pricing, basic, off, slash }) => {
  return (
    <div className="border-solid border-[1px] rounded-[8px] p-5 m-3 border-[#8E8E93] w-[100%] ">
      <div className="flex justify-between">
        <h1 className="font-[700] text-[36px] text-[#41723]">{title}</h1>
        <div className="flex">
          <h1 className="font-[700] text-[36px] text-[#07AA3D]">{pricing}</h1>
          <span className="font-[700] text-[36px] text-[#07AA3D] relative bottom-2">{slash}</span>
          <p className="font-[700] mt-4">{off}</p>
        </div>
      </div>

      <p className="flex flex-row mt-2 justify-center items-center font-[400] text-[18px] text-[#041723] w-[251px] h-[43px] border-solid border-[1px] border-[#8E8E93] rounded-[8px]">
        {basic}
      </p>
      <div className="mt-6 flex justify-between">
        <div>
          <div className="flex">
            <div className="relative mt-1">
              <span className="absolute top-[4.5px] left-[3.5px]">{check}</span>
              <span>{circle}</span>
            </div>
            <p className="font-[400] ml-2 text-[18px] text-[#041723] flex-none flex-grow-0">
              1 hour meeting limit
            </p>
          </div>

          <div className="flex mt-4">
            <div className="relative mt-1">
              <span className="absolute top-[4.5px] left-[3.5px]">{check}</span>
              <span>{circle}</span>
            </div>
            <p className="font-[400] ml-2 text-[18px] text-[#041723] flex-none flex-grow-0">
              100 attendees
            </p>
          </div>

          <div className="flex mt-4">
            <div className="relative mt-1">
              <span className="absolute top-[4.5px] left-[3.5px]">{check}</span>
              <span>{circle}</span>
            </div>
            <p className="font-[400] ml-2 text-[18px] text-[#041723] flex-none flex-grow-0">
              Chat box Chat box
            </p>
          </div>

          <div className="flex mt-4">
            <div className="relative mt-1">
              <span className="absolute top-[4.5px] left-[3.5px]">{check}</span>
              <span>{circle}</span>
            </div>
            <p className="font-[400]  ml-2 text-[18px] text-[#041723] flex-none flex-grow-0">
              Collaboration and file sharing
            </p>
          </div>

          <div className="flex mt-4">
            <div className="relative mt-1">
              <span className="absolute top-[4.5px] left-[3.5px]">{check}</span>
              <span>{circle}</span>
            </div>
            <p className="font-[400]  ml-2 text-[18px] text-[#041723] flex-none flex-grow-0">
              Collaboration and file sharing
            </p>
          </div>
        </div>

        <div className="relative mt-1">
          <div className="flex mt-4">
            <div className="relative mt-1">
              <span className="absolute top-[4.5px] left-[4px]">{check}</span>
              <span>{circle}</span>
            </div>
            <p className="font-[400]  ml-2 text-[18px] text-[#041723] flex-none flex-grow-0">
              Collaboration and file sharing
            </p>
          </div>

          <div className="flex mt-4">
            <div className="relative mt-1">
              <span className="absolute top-[4.5px] left-[4px]">{check}</span>
              <span>{circle}</span>
            </div>
            <p className="font-[400]  ml-2 text-[18px] text-[#041723] flex-none flex-grow-0">
              Collaboration and file sharing
            </p>
          </div>
        </div>
      </div>
      <p className="text-[#07AA3D] font-[400] text-[18px] mt-4 cursor-pointer">See Details</p>
    </div>
  );
};

export default PricingCard;
