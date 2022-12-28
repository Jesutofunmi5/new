import { close } from "assets/images";
import { LiveChat } from "components/modules/forms";

interface LiveChatModalProps {
  setOpenModal: (liveChatModal: boolean) => void;
  liveChatModal: boolean;
}

const LiveChatModal = ({ setOpenModal, liveChatModal }: LiveChatModalProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-70 z-50 ${
        liveChatModal ? "flex" : "hidden"
      } flex items-center justify-center px-2`}
    >
      <div className="w-[500px] h-[600px] bg-white rounded-lg">
        <div className="flex justify-between items-center p-2 border-b-2 border-b-gray-100">
          <p>Zumaridi Chat assistant</p>
          <button onClick={() => setOpenModal(false)}>
            <img src={close} />
          </button>
        </div>
        <LiveChat />
      </div>
    </div>
  );
};

export default LiveChatModal;
