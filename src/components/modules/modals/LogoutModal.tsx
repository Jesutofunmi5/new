import { logoutimg } from "assets/images";

interface LogoutModalProps {
  setOpenModal: (modalOpen: boolean) => void;
}

const LogoutModal = ({ setOpenModal }: LogoutModalProps) => {
  return (
    <div className="fixed inset-0 bg-[#000] bg-opacity-70 flex items-center justify-center p-5">
      <div className="h-[406px] w-[440px] bg-white pb-4 flex flex-col gap-8 rounded-lg">
        <div className="bg-gray-50 flex items-center justify-center rounded-t-lg h-48">
          <img src={logoutimg} className="h-28 w-28 text-center" />
        </div>
        <div className="px-8">
          <p className="text-black font-bold text-[21px]">Logout?</p>
          <p className="text-black text-[18px]">Are you sure you want to Logout?</p>
        </div>
        <div className="flex items-center justify-between px-8">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            className="bg-white border-2 border-green rounded-md py-2 px-4 text-green"
          >
            Nevermind
          </button>
          <button type="submit" className="bg-green py-2 px-4 rounded-md text-white">
            Yes, Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
