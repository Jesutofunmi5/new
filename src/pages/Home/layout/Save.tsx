import { ZUimages } from "assets";

const Save = () => {
  return (
    <div className="bg-[#F8F9FC] flex justify-between px-5 md:px-10 xl:px-20 py-20 ">
      <div className="mt-[35px]">
        <p className="text-6xl font-normal leading-[80px]">
          Save your extra
          <br /> money by using
          <br />
          <span className="text-[#07AA3D]"> Zumaridi.</span>
        </p>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-between bg-white h-[515px] w-[379px] p-8 shadow-2xl rounded-md z-10 mt-[35px] ">
          <div className="flex flex-col gap-4 rounded-lg">
            <p className="text-5xl">$271,284</p>
            <p className="text-base">Annual Revenue</p>
          </div>
          <div className="bg-white text-gray-200 flex text-3xl gap-12">
            . . . . . . . . . . . . . . . . . . . .
          </div>
          <div className="flex flex-col gap-4 rounded-lg ">
            <p className="text-5xl">$4,249</p>
            <p className="text-base">Savings Using Other Services</p>
          </div>
          <div className="flex flex-col gap-4 justify-around text-white bg-[#22CC74] my-6 rounded-lg  p-6">
            <p className="text-5xl">$21,947</p>
            <p className="text-base">Savings Using Zumaridi</p>
          </div>
        </div>
        <div className="mt-0 -ml-[85px]">
          <img src={ZUimages.dots} className=""></img>
        </div>
      </div>
    </div>
  );
};

export default Save;
