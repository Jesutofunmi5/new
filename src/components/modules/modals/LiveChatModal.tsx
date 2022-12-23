import { close } from "assets/images";

interface Props {
  setOpenModal: (liveChatModalOpen: boolean) => void;
}

const LiveChatModal = ({ setOpenModal }: Props) => {
  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center px-2">
      <div className="w-[500px] h-[600px] bg-white rounded-lg">
        <div className="flex justify-between items-center">
          <p>Zumaridi Chat assistant</p>
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            <img src={close} />
          </button>
        </div>
        <p>This is the live chat modal</p>
      </div>
    </div>
  );
};

export default LiveChatModal;
