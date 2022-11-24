import { ZUimages } from "assets";
import { Button } from "components";
import { SIGNUP } from "routes/CONSTANTS";

const HomeView = () => {
  return (
    <div className="text-lg space-y-5">
      {/* Hero Section */}
      <div
        className="relative top-0 w-full h-screen flex items-center justify-between bg-black text-white overflow-hidden"
        style={{ backgroundImage: `url('${ZUimages.heroBackground}')` }}
      >
        <div className="relative flex-col mt-20 ml-35 mb-80 text-white padding-20">
          <h1 className="text-justify my-4 text-4xl ml-20 md:text-[60px] text-white">
            Connect Simply, <br /> Engage{" "}
            <span className="font-bold text-[#50C878]">Powerfully.</span>
          </h1>

          <h5 className="text-justify my-4 ml-20 md:">
            The end-to-end video engagement platform <br />
            enabling organizations to create meetings <br />
            and webinars at scale.
          </h5>
          <Button to={SIGNUP} variant="full" className="width-100 m-20 cursor-">
            Get Started
          </Button>
        </div>
        <img src={ZUimages.youngManOnline} className="mb-70 mt-0" />
        <div className="absolute inset-0 bg-[#1C1C1E] opacity-0" />

        {/* Hero contents */}
      </div>
    </div>
  );
};
export default HomeView;
