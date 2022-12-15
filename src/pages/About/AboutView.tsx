import { ZUimages } from "assets";
import { Button } from "components";
import { SIGNUP } from "routes/CONSTANTS";

const AboutView = () => {
  return (
    <div className="text-lg bg-white">
      <div
        className="w-full h-max overflow-hidden bg-cover bg-white"
        style={{ backgroundImage: `url('${ZUimages.aboutBackground}')` }}
      >
        <div className="mt-12 px-8">
          <h6 className="text-green text-2xl font-medium">Welcome to Zumaridi</h6>
          <div className="pt-4 w-1/2">
            <h1 className="text-main text-[3.5rem] font-bold">
              Connect Simply,
              <p>
                Engage
                <span className="text-green"> Powerfully.</span>
              </p>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-8">
            <div className="pr-10">
              <p className="text-2xl font-semibold leading-8 text-gray mb-10">
                Zumaridi is a live streaming and conferencing platform where you can connect simply
                and engage powerfully. Zumaridi comes from the Swahili word meaning "Emerald" The
                emerald has been a gem of fascination in many cultures for over six thousand years.
                It is so prized, that carat for carat, a fine emerald may be two to three times as
                valuable as a diamond. Zumaridi harnesses the power of collaboration to create
                innovative solutions to solve African problems and empower young people in Africa.
              </p>
              <Button to={SIGNUP} className="absolute -mr-[650px] px-16 uppercase ">
                Get Started
              </Button>
            </div>
            <div className="mt-10 md:-mt-[7rem] mb-10">
              <img src={ZUimages.aboutConference} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:py-12 mx-4 md:mx-40 mt-10 md:mt-32">
        <div className="px-4 md:px-12 py-10 bg-white shadow-lg rounded-1xl">
          <div className="grid sm:grid-cols-2 gap-4 p-8">
            <div className="sm:border-b-0 sm:border-r">
              <div className="flex">
                <img src={ZUimages.zuArchery} className=""></img>
                <h1 className="pl-4">Mission</h1>
              </div>
              <p className="text-gray-200 pt-4">Connecting people through technology</p>
            </div>
            <div className="">
              <div className="flex">
                <img
                  src={ZUimages.zuEye}
                  className="border border-dashed border-green p-1 border-8"
                ></img>
                <h1 className="pl-4">Vision</h1>
              </div>
              <p className="text-gray-200 pt-4">Innovate for change</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
