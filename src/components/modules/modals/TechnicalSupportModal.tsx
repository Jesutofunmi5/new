import { close } from "assets/images";
import { TechnicalSupportForm } from "components/modules/forms";

interface Props {
  setOpenModal: (technicalSupportModalOpen: boolean) => void;
}

const TechnicalSupportModal = ({ setOpenModal }: Props) => {
  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center p-5">
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
