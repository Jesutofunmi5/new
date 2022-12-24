import { ZUimages } from "assets";
import { TechnicalSupportModal, LiveChatModal } from "components/modules/modals";
import { useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
  const [technicalModal, setTechnicalModal] = useState(false);
  const [liveChatModal, setLiveChatModal] = useState(false);
  return (
    <div className=" bg-white md:pt-44 pt-8  pb-4 my-3 px-12">
      <div className="flex md:flex-row flex-col gap-12 justify-center items-center  py-10">
        <div
          className=" rounded-md border-2 md:h-[336px] h-64 md:w-[346px] w-full flex justify-center flex-col items-center bg-white hover:bg-[#F8F9FC] border-gray-100 hover:border-green cursor-pointer"
          onClick={() => setLiveChatModal(true)}
        >
          <img src={ZUimages.zuChatDots} className="h-7 w-7 m-2" />
          <p className="font-bold md:text-[20px] text-lg p-2">Live Chat</p>
          <p className="font-normal md:text-[20px] text-lg p-3 text-center">
            Get instant answers to your questions about our product.
          </p>
          {liveChatModal && <LiveChatModal setOpenModal={setLiveChatModal} />}
        </div>

        <div
          className=" rounded-md border-2 border-gray-100 hover:border-green md:h-[336px] h-64 md:w-[346px] w-full bg-white hover:bg-[#F8F9FC] flex justify-center flex-col items-center cursor-pointer"
          onClick={() => setTechnicalModal(true)}
        >
          <div className="flex p-2">
            <img src={ZUimages.zuTool} className="h-7 w-7 m-2" />
            <img src={ZUimages.zuSettings} className="h-7 w-7 m-2" />
          </div>

          <p className="font-bold md:text-[20px] text-lg p-2">Technical Support</p>
          <p className="font-normal md:text-[20px] text-lg p-3 text-center">
            Email technical support for issues with our product.
          </p>
          {technicalModal && <TechnicalSupportModal setOpenModal={setTechnicalModal} />}
        </div>
        <Link to="">
          <div className=" rounded-md border-2 border-gray-100 hover:border-green md:h-[336px] h-64 md:w-[346px] w-full flex justify-center flex-col items-center hover:border bg-white hover:bg-[#F8F9FC] cursor-pointer">
            <img src={ZUimages.zuCoins} className="h-7 w-7 mt-2" />
            <p className="font-bold md:text-[20px] text-lg p-1 mt-2">Billing & Payment</p>
            <p className="font-normal md:text-[20px] text-lg p-3 text-center">
              Solve your billing & payment issues. Get answers about our pricing, payment channels,
              and subscriptions.
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default About;
