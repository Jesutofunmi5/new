import { close } from "assets/images";
// import { useEffect } from "react";

type ModalId = string | null;

interface ModalProps {
  size: string;
  title?: string;
  content: React.ReactNode;
  setOpenModal: (value: ModalId | null) => void;
  [key: string]: any;
}

const Modal = ({ size, content, title, setOpenModal, ...otherProps }: ModalProps) => {
  return (
    <div {...otherProps}>
      <div
        className={`${size} bg-white rounded-lg top-1/4 left-2/4 -translate-x-1/2 -translate-y-1/2 z-50 absolute `}
      >
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-b-gray-200 bg-gray-50 rounded-t-lg">
          <p className="text-black">{title}</p>
          <button
            onClick={() => {
              setOpenModal(null);
            }}
          >
            <img src={close} />
          </button>
        </div>
        <div className="p-2 overflow-scroll z-100">{content}</div>
      </div>
      <div
        onClick={() => setOpenModal(null)}
        className="fixed inset-0 bg-black bg-opacity-70 z-10"
      ></div>
    </div>
  );
};

export default Modal;
