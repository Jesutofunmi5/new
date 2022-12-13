import { ZUimages } from "assets";
import { SIGNUP } from "routes/CONSTANTS";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-between bg-black text-white overflow-hidden bg-opacity-80"
      style={{ backgroundImage: `url('${ZUimages.heroBackground}')` }}
    >
      <div className="flex flex-col gap-12 text-white pl-20 ">
        <p className="text-4xl md:text-[80px] text-white font-normal">Connect Simply,</p>
        <p className="text-4xl md:text-[80px] text-white font-normal">
          Engage
          <span className="font-bold text-[#50C878]"> Powerfully.</span>
        </p>

        <p className="text-justify text-3xl">
          The end-to-end video engagement platform <br />
          enabling organizations to create meetings <br />
          and webinars at scale.
        </p>
        <div className="w-full">
          <Link to={SIGNUP}>
            <div className="w-[90%] bg-[#50C878] py-4 px-4 flex items-center justify-center rounded-md">
              GET STARTED!
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-60">
        <img src={ZUimages.youngManWithVector} className="" />
      </div>
    </div>
  );
};
export default Hero;
