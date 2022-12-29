import { close } from "assets/images";
import React from "react";

interface ModalProps {
  size: string;
  title?: string;
  content: React.ReactNode;
  setOpenModal: (value: boolean) => void;
  [key: string]: any; // this allows you to pass in any other props dynamically
}

const Modal = ({ size, content, title, setOpenModal, ...otherProps }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-5"
      {...otherProps}
    >
      <div className={`${size} bg-white rounded-lg`}>
        <div className="flex items-center justify-between px-4 py-2 border-b-2 border-b-gray-200 bg-gray-50 rounded-t-lg">
          <p className="text-black">{title}</p>
          <button
            onClick={() => {
              setOpenModal(false);
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
