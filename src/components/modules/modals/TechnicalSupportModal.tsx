import { close } from "assets/images";
import { TechnicalSupportForm } from "components/modules/forms";

interface TechnicalModalProps {
  setOpenModal: (technicalModal: boolean) => void;
}

const TechnicalSupportModal = ({ setOpenModal }: TechnicalModalProps) => {
  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center p-5">
      <div className="md:w-[500px] w-full md:h-[700px] h-full bg-white rounded-lg">
        <div className="flex justify-between items-center md:px-8 px-2 bg-[#FAFAFA] text-black rounded-t-lg">
          <p className="text-[18px]">Technical Support</p>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="p-2 text-green"
          >
            <img src={close} />
          </button>
        </div>
        <TechnicalSupportForm />
      </div>
    </div>
  );
};

export default TechnicalSupportModal;
