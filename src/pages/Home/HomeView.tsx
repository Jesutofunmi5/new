import { Link } from "react-router-dom";

import { ZUimages } from "assets";
import { HOME } from "routes/CONSTANTS";

const HomeView = () => {
  return (
    <div className="text-lg space-y-5">
      {/* Hero Section */}
      <div
        className="relative top-0 w-full h-screen flex items-center justify-between bg-black text-white overflow-hidden"
        style={{ backgroundImage: `url('${ZUimages.heroBackground}')` }}
      >
        <div className="relative flex-col mt-100 ml-35  text-white padding-20 ">
          <h1 className="text-justify my-4 text-4xl ml-20 md:text-[60px] text-white">
            Connect Simply, <br /> Engage{" "}
            <span className="font-bold text-[#50C878]">Powerfully.</span>
          </h1>

          <h5 className="text-justify my-4 ml-20 ">
            The end-to-end video engagement platform <br />
            enabling organizations to create meetings <br />
            and webinars at scale.
          </h5>
          <Link to={HOME}>
            <div className="w-100 h-auto   p-2 ml-20 bg-[#50C878] text-center justify-center cursor:pointer">
              GET STARTED!
            </div>
          </Link>
        </div>

        <div className="mt-60">
          <img src={ZUimages.youngManWithVector} className="" />
        </div>

        {/* Hero contents */}
        <div className="absolute inset-0 bg-[#1C1C1E] opacity-10" />
      </div>

      <div className="bg-white flex-col height-200vh ">
        <div className="flex flex-row items-justify space-between items-center mt-12">
          <div className="relative mr-48 ">
            <img src={ZUimages.dots} className=""></img>
          </div>
          <div className="relative flex-col mr-48">
            <h3 className="">
              Achieve more with <br />
              the Zumaridi Video <br />
              Conferencing
            </h3>
          </div>
          <div className="relative text-justify  mr-24 ">
            <p>
              Amet minim mollit non deserunt <br />
              ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis <br />
              enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className="flex flex-row space-around items-center mt-6 ">
          <div className="flex-col ml-48  item-center">
            <img src={ZUimages.yellowElipse} className="ml-6 "></img>
            <img src={ZUimages.zuAthletics} className="ml-6  z-10 -my-10"></img>
            <br />
            <br />
            <br />
            <h6>
              <strong>Manage Smartly</strong>
            </h6>
            <br />
            <p>
              Amet minim mollit non
              <br />
              ullamco est sit aliqua
            </p>
          </div>
          <div className="flex-col ml-72 item-center">
            <img src={ZUimages.greenElipse} className="ml-6 "></img>
            <img src={ZUimages.zuArchery} className="ml-6 z-10 -my-10"></img>
            <br />
            <br />
            <br />
            <h6>
              <strong>Communicate Fast</strong>
            </h6>
            <br />
            <p>
              Amet minim mollit non
              <br />
              ullamco est sit aliqua
            </p>
          </div>
          <div className="flex-col  ml-72 mx-12 item-right">
            <img src={ZUimages.purpleElipse} className=" ml-6 "></img>
            <img src={ZUimages.zuMoneyCoins} className="mx-6 -my-10 z-10"></img>
            <br />
            <br />
            <br />
            <h6>
              <strong>Save Costs</strong>
            </h6>
            <br />
            <p>
              Amet minim mollit non
              <br />
              ullamco est sit aliqua
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};
export default HomeView;
