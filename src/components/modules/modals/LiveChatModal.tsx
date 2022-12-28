import { close } from "assets/images";
import { LiveChat } from "components/modules/forms";

interface LiveChatModalProps {
  setOpenModal: (modalOpen: boolean) => void;
}

const LiveChatModal = ({ setOpenModal }: LiveChatModalProps) => {
  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center px-2">
      <div className="w-[500px] h-[600px] bg-white rounded-lg">
        <div className="flex justify-between items-center md:px-8 px-2 bg-[#FAFAFA] text-black rounded-t-lg">
          <p className="text-[18px]">Zumaridi Chat Assistant</p>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="p-2 text-green"
          >
            <img src={close} />
          </button>
        </div>
        <LiveChat />
      </div>
    </div>
  );
};

export default LiveChatModal;
