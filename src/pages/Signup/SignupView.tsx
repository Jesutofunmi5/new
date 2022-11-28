import { Link } from "react-router-dom";
import { ZUimages } from "assets";
import { SIGNUPFORM } from "routes/CONSTANTS";

const SignupView = () => {
  return (
    <>
      <div className="w-lif">
        <h4 className=" text-reg font-normal leading-regls">Join Us!</h4>
        <p className="font-normal text-lg capitalize  leading-6 text-greyish mt-1.5">
          To begin this journey, tell us what type of account you’d be opening.
        </p>
        <Link to={SIGNUPFORM}>
          <div className="w-lif h-lifh bg-firstbox flex  rounded-md hover:border-1 hover:border-firstboxb mt-bot">
            <div className="relative w-poly h-poly ml-7 flex items-center justify-center">
              <img src={ZUimages.firstPolygon} className="" alt="" />
              <img src={ZUimages.polyUser} className="absolute" alt="" />
            </div>
            <div className="w-lifj ml-7 mt-ind">
              <h6 className="text-lg leading-6 font-bold text-individual">Individual</h6>
              <p className="text-base leading-eighteeen font-normal text-greyish mt-ten">
                Personal account to manage all you activities.
              </p>
            </div>
            <div className="flex items-center">
              <img src={ZUimages.arrow} className="" alt="" />
            </div>
          </div>
        </Link>
        <div className="w-lif h-lifh bg-secondbox flex rounded-md border-1 border-transparent mt-sbot">
          <div className="relative w-poly h-poly ml-7 flex items-center justify-center">
            <img src={ZUimages.secondPolygon} alt="" />
            <img src={ZUimages.briefcase} className="absolute" alt="" />
          </div>
          <div className="w-lifj ml-7 mt-ind">
            <h6 className="text-lg leading-6 font-bold text-individual">Business</h6>
            <p className="text-base leading-eighteen font-normal text-greyish mt-ten">
              Own or belong to a company, this is for you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupView;
