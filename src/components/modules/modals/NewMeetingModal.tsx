import { ZUimages } from "assets";
import { NewMeetingForm } from "components/modules/forms";

interface NewMeetingProps {
  setOpenModal: (modalOpen: boolean) => void;
}

function NewMeetingModal({ setOpenModal }: NewMeetingProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-5">
      <div className="md:h-[666px] h-full md:w-[653px] w-full bg-white flex flex-col gap-4 pb-4 rounded-lg">
        <div className="flex justify-between items-center md:px-8 px-2 bg-[#FAFAFA] text-black rounded-t-lg">
          <p className="text-[18px]">Schedule a Meeting</p>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="p-2 text-green"
          >
            <img src={ZUimages.close} />
          </button>
        </div>
        <NewMeetingForm />
      </div>
    </div>
  );
}

export default NewMeetingModal;
