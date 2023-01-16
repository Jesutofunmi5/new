import { close } from "assets/images";
import React from "react";

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
    <div
      className="fixed h-[700px] inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-5"
      {...otherProps}
    >
      <div className={`${size} bg-white rounded-lg`}>
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
        <div className="p-2">{content}</div>
      </div>
    </div>
  );
};

export default Modal;
