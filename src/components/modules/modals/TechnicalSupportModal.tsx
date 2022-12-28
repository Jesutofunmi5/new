import { close } from "assets/images";
import { TechnicalSupportForm } from "components/modules/forms";

interface TechnicalModalProps {
  setOpenModal: (technicalModal: boolean) => void;
  technicalModal: boolean;
}

const TechnicalSupportModal = ({ setOpenModal, technicalModal }: TechnicalModalProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 z-50 ${
        technicalModal ? "flex" : "hidden"
      } flex items-center justify-center px-5`}
    >
      <div className="md:w-[500px] w-full md:h-[700px] h-full bg-white rounded-lg">
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-b-gray-200 bg-gray-50 rounded-t-lg">
          <p>Technical Support</p>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
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
