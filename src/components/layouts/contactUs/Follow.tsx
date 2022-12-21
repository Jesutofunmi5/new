import { ZUimages } from "assets";

const Follow = () => {
  return (
    <div className=" w-full bg-white flex items-center justify-center ">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3 flex-row  rounded-md p-4 md:shadow-lg md:w-3/4 w-full bg-white md:absolute">
        <div className="md:border-r-2 border-r-none md:border-b-0 border-b-2  border-gray-100  md:p-4 py-20 px-8 flex flex-col items-center justify-center">
          <div className="text-dark mx-16">Follow us</div>
          <div className="flex items-center p-4 justify-center space-x-1 ">
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuFacebook} className="w-4 h-4" alt="linkedin" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuInstagram} className="w-4 h-4" alt="linkedin" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuTwitter} className="w-4 h-4" alt="linkedin" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuLinkedin} className="w-4 h-4" alt="linkedin" />
            </button>
            <button className="w-9 h-9 flex items-center justify-center rounded-full  shadow-lg bg-white">
              <img src={ZUimages.zuYouTube} className="w-4 h-4" alt="linkedin" />
            </button>
          </div>
        </div>
        <div className="md:border-r-2 border-r-none md:border-b-0 border-b-2 border-gray-100 md:p-4 py-20 px-8 flex flex-col items-center justify-center">
          <button className="flex items-center text-black space-x-3">
            <img src={ZUimages.zuPhoneCall} className="w-5 h-5" alt="linkedin" />
            <span>+31621922705</span>
          </button>
          <button className="flex items-center text-black space-x-3 py-3">
            <img src={ZUimages.zuMailBox} className="w-5 h-5" alt="linkedin" />
            <span>infor@zumaridi.io</span>
          </button>
        </div>
        <div className="md:p-4 pt-20 px-4 flex items-center justify-center align-middle">
          <button className="flex items-center text-black space-x-3 py-5">
            <img src={ZUimages.zuPlaceMarker} className="w-5 h-5" alt="linkedin" />
            <span className="inline-block align-middle">Right here the company address</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Follow;
