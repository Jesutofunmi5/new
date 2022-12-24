import { close } from "assets/images";
import { JoinMeetingForm } from "components/modules/forms";

interface JoinMeetingProps {
  setOpenModal: (modalOpen: boolean) => void;
}
const JoinMeetingModal = ({ setOpenModal }: JoinMeetingProps) => {
  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center p-5">
      <div className="md:w-[620px] w-full h-[540px] bg-white rounded-lg p-2">
        <div className="flex justify-between p-2 border-b-2 border-b-gray-100">
          <p className="text-black">Join Meeting</p>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={close} />
          </button>
        </div>
        <JoinMeetingForm />
      </div>
    </div>
  );
};

export default JoinMeetingModal;
