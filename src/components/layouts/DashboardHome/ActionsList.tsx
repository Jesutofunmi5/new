import { ZUimages } from "assets";
import { Link } from "react-router-dom";

const ActionsList = () => {
  return (
    <div className=" overflow-scroll h-[80vh] w-full pr-6">
      <div className="h-48 w-full mb-4 rounded-2xl bg-black flex justify-between p-8 items-center text-white">
        <div>
          <p className="font-bold text-lg">Welcome user</p>
          <p className="font-bold text-[61px]">12:37</p>
          <p className="text-[18px] font-bold">Saturday, 12th October, 2022</p>
        </div>
        <div>
          <img />
        </div>
      </div>
      <div className="h-48 w-full mb-4 rounded-2xl bg-green-100 p-8 flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[21px] text-black">Design Daily Meeting</p>
            <div className="flex gap-2 items-center">
              <p className="text-gray-200 text-base">
                <span>
                  <img />
                </span>
                10:00 - 11:30
              </p>
              <p className="text-gray-200 text-base">|</p>
              <p className="text-gray-200 text-base">has started</p>
            </div>
          </div>
          <div className="flex">
            <img src={ZUimages.userimg1} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg2} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg3} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg4} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <div className="bg-green rounded-full h-10 w-10 flex items-center justify-center text-white">
              +6
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img />
          <Link
            to=""
            className="font-normal text-[18px] bg-green rounded-lg py-2 px-4 text-white flex gap-2 items-center justify-center"
          >
            <span>
              <img src={ZUimages.ZuPlay} />
            </span>{" "}
            Join Conference
          </Link>
        </div>
      </div>
      <div className="h-48 w-full mb-4 rounded-2xl bg-green-100 p-8 flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[21px] text-black">Developers Daily Meeting</p>
            <div className="flex gap-2 items-center">
              <p className="text-gray-200 text-base">
                <span>
                  <img />
                </span>
                10:00 - 11:30
              </p>
              <p className="text-gray-200 text-base">|</p>
              <p className="text-gray-200 text-base">has started</p>
            </div>
          </div>
          <div className="flex">
            <img src={ZUimages.userimg1} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg2} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg3} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg4} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <div className="bg-green rounded-full h-10 w-10 flex items-center justify-center text-white">
              +6
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img />
          <Link
            to=""
            className="font-normal text-[18px] bg-green rounded-lg py-2 px-4 text-white flex gap-2 items-center justify-center"
          >
            <span>
              <img src={ZUimages.ZuPlay} />
            </span>{" "}
            Join Conference
          </Link>
        </div>
      </div>
      <div className="h-48 w-full mb-4 rounded-2xl bg-green-100 p-8 flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[21px] text-black">Developers Daily Meeting</p>
            <div className="flex gap-2 items-center">
              <p className="text-gray-200 text-base">
                <span>
                  <img />
                </span>
                10:00 - 11:30
              </p>
              <p className="text-gray-200 text-base">|</p>
              <p className="text-gray-200 text-base">has started</p>
            </div>
          </div>
          <div className="flex">
            <img src={ZUimages.userimg1} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg2} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg3} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg4} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <div className="bg-green rounded-full h-10 w-10 flex items-center justify-center text-white">
              +6
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img />
          <Link
            to=""
            className="font-normal text-[18px] bg-green rounded-lg py-2 px-4 text-white flex gap-2 items-center justify-center"
          >
            <span>
              <img src={ZUimages.ZuPlay} />
            </span>{" "}
            Join Conference
          </Link>
        </div>
      </div>
      <div className="h-48 w-full mb-4 rounded-2xl bg-green-100 p-8 flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[21px] text-black">Developers Daily Meeting</p>
            <div className="flex gap-2 items-center">
              <p className="text-gray-200 text-base">
                <span>
                  <img />
                </span>
                10:00 - 11:30
              </p>
              <p className="text-gray-200 text-base">|</p>
              <p className="text-gray-200 text-base">has started</p>
            </div>
          </div>
          <div className="flex">
            <img src={ZUimages.userimg1} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg2} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg3} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg4} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <div className="bg-green rounded-full h-10 w-10 flex items-center justify-center text-white">
              +6
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img />
          <Link
            to=""
            className="font-normal text-[18px] bg-green rounded-lg py-2 px-4 text-white flex gap-2 items-center justify-center"
          >
            <span>
              <img src={ZUimages.ZuPlay} />
            </span>{" "}
            Join Conference
          </Link>
        </div>
      </div>
      <div className="h-48 w-full mb-4 rounded-2xl bg-green-100 p-8 flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-bold text-[21px] text-black">Design Daily Meeting</p>
            <div className="flex gap-2 items-center">
              <p className="text-gray-200 text-base">
                <span>
                  <img />
                </span>
                10:00 - 11:30
              </p>
              <p className="text-gray-200 text-base">|</p>
              <p className="text-gray-200 text-base">has started</p>
            </div>
          </div>
          <div className="flex">
            <img src={ZUimages.userimg1} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg2} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg3} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <img src={ZUimages.userimg4} alt="" className="rounded-full h-10 w-10 -mr-2" />
            <div className="bg-green rounded-full h-10 w-10 flex items-center justify-center text-white">
              +6
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <img />
          <Link
            to=""
            className="font-normal text-[18px] bg-green rounded-lg py-2 px-4 text-white flex gap-2 items-center justify-center"
          >
            <span>
              <img src={ZUimages.ZuPlay} />
            </span>{" "}
            Join Conference
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ActionsList;
