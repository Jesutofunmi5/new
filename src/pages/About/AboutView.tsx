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
            <div className="mt-10 md:-mt-[7rem]">
              <img src={ZUimages.aboutConference} />
            </div>
          </div>
        </div>
      </div>
      <div className="">ppp</div>
    </div>
  );
};

export default AboutView;
