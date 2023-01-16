import { BillsAndPaymentForm, LiveChat, TechnicalSupportForm } from "components/modules";
import { Modal } from "components/modules/modals";
import { useState } from "react";
import { aboutCardData } from "utils";

type ModalId = string | null;

const About = () => {
  const [openModal, setOpenModal] = useState<ModalId>(null);

  return (
    <div className=" bg-white md:pt-44 pt-8  pb-4 my-3 px-12">
      <div className="flex md:flex-row flex-col gap-12 justify-center items-center py-10">
        <div
          key={aboutCardData[0].id}
          className=" rounded-md border-2 md:h-[336px] h-64 md:w-[346px] w-full flex justify-center flex-col items-center bg-white hover:bg-[#F8F9FC] border-gray-100 hover:border-green cursor-pointer"
          onClick={() => setOpenModal(aboutCardData[0].id)}
        >
          <div className="flex md:h-12 h-8">
            <img src={aboutCardData[0].icon} className="h-7 w-7 m-2" />
          </div>
          <p className="font-bold md:text-[20px] text-lg p-2 md:h-12 h-8">
            {aboutCardData[0].title}
          </p>
          <p className="font-normal md:text-[20px] text-lg p-3 text-center md:h-40 h-28">
            {aboutCardData[0].description}
          </p>
        </div>

        <div
          key={aboutCardData[1].id}
          className=" rounded-md border-2 md:h-[336px] h-64 md:w-[346px] w-full flex justify-center flex-col items-center bg-white hover:bg-[#F8F9FC] border-gray-100 hover:border-green cursor-pointer"
          onClick={() => setOpenModal(aboutCardData[1].id)}
        >
          <div className="flex md:h-12 h-8">
            <img src={aboutCardData[1].icon} className="h-7 w-7 m-2" />
            <img src={aboutCardData[1].icon2} className="h-7 w-7 m-2" />
          </div>
          <p className="font-bold md:text-[20px] text-lg p-2 md:h-12 h-8">
            {aboutCardData[1].title}
          </p>
          <p className="font-normal md:text-[20px] text-lg p-3 text-center md:h-40 h-28">
            {aboutCardData[1].description}
          </p>
        </div>

        <div
          key={aboutCardData[2].id}
          className=" rounded-md border-2 md:h-[336px] h-64 md:w-[346px] w-full flex justify-center flex-col items-center bg-white hover:bg-[#F8F9FC] border-gray-100 hover:border-green cursor-pointer"
          onClick={() => setOpenModal(aboutCardData[2].id)}
        >
          <div className="flex md:h-12 h-8">
            <img src={aboutCardData[2].icon} className="h-7 w-7 m-2" />
          </div>
          <p className="font-bold md:text-[20px] text-lg p-2 md:h-12 h-8">
            {aboutCardData[2].title}
          </p>
          <p className="font-normal md:text-[20px] text-lg p-3 text-center md:h-40 h-28">
            {aboutCardData[2].description}
          </p>
        </div>
      </div>

      {openModal === "chat" && (
        <Modal
          size="w-[500px] w-full h-[600px]"
          title="Zumaridi Live Chat"
          content={<LiveChat />}
          setOpenModal={() => setOpenModal(null)}
        />
      )}
      {openModal === "tech" && (
        <Modal
          size="md:w-[500px] w-full md:h-[700px]"
          title="Technical Support"
          content={<TechnicalSupportForm />}
          setOpenModal={() => setOpenModal(null)}
        />
      )}
      {openModal === "billing" && (
        <Modal
          size="md:w-[500px] w-full md:h-[700px]"
          title="Technical Support"
          content={<BillsAndPaymentForm />}
          setOpenModal={() => setOpenModal(null)}
        />
      )}
    </div>
  );
};

export default About;
