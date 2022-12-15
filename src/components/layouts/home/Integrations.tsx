import { ZUimages } from "assets";
import { Link } from "react-router-dom";

const Integrations = () => {
  return (
    <div>
      <div className=" flex flex-col gap-6 bg-[#C7E8D2] w-full h-full text-center py-20">
        <p className="text-[62px] font-bold">Software Integrations</p>
        <p className="text-[20px] font-normal opacity-70">
          Amet minim mollit non deserunt ullamco est sit aliqua <br /> dolor do amet sint. Velit
          officia consequat duis enim
        </p>
        <Link to="" className="underline underline-offset-8 text-[#07AA3D] text-lg font-normal">
          Explore All Apps
        </Link>
        <img src={ZUimages.socialIcons} className="mx-auto"></img>
      </div>
    </div>
  );
};

export default Integrations;
