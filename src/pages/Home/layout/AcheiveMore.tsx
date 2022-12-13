import { ZUimages } from "assets";
const AcheiveMore = () => {
  return (
    <div className="py-20">
      <div className="flex gap-20">
        <div className="flex gap-56">
          <img src={ZUimages.dots} className="" />
          <div className="relative flex-col">
            <h4 className="text-6xl font-normal leading-[90px]">
              Achieve more with <br />
              the Zumaridi Video <br />
              Conferencing
            </h4>
          </div>
        </div>
        <div className="text-justify pt-10">
          <p className="text-xl font-normal opacity-70 leading-[35px]">
            Amet minim mollit non deserunt <br />
            ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis <br />
            enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center px-5 md:px-20 pt-8 ">
        <div className="w-[390px]">
          <div>
            <div className="w-16 h-16 rounded-full bg-[#FFD166] text-center"></div>
            <img src={ZUimages.zuAthletics} className="-mt-12 ml-3 text-center"></img>
          </div>
          <p className="font-bold pt-8">Manage Smartly</p>
          <p className="opacity-70 pt-3">
            Amet minim mollit non
            <br />
            deserunt ullamco est sit aliqua
          </p>
        </div>
        <div className="flex-col w-[390px]">
          <div>
            <div className="w-16 h-16 rounded-full bg-[#96F7D2] text-center"></div>
            <img src={ZUimages.zuArchery} className="-mt-12 ml-3"></img>
          </div>
          <p className="font-bold pt-8">Communicate Fast</p>
          <p className="opacity-70 pt-3">
            Amet minim mollit non
            <br />
            deserunt ullamco est sit aliqua
          </p>
        </div>
        <div className="flex-col w-[390px]">
          <div>
            <div className="w-16 h-16 rounded-full bg-[#A9D2FF] text-center"></div>
            <img src={ZUimages.zuMoneyCoins} className="-mt-12 ml-6"></img>
          </div>
          <p className="font-bold pt-8">Save Costs</p>
          <p className="opacity-70 pt-3">
            Amet minim mollit non
            <br />
            deserunt ullamco est sit aliqua
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcheiveMore;
