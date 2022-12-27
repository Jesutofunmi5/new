import { useState } from "react";
import { ZUicons, ZUimages } from "assets";
import { Button } from "components/widgets";
import { JoinMeetingModal, NewMeetingModal } from "components/modules/modals";

const Actions = () => {
  const [newModal, setNewModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  return (
    <div className=" grid grid-cols-2 gap-4 text-white">
      <div className="bg-green rounded-2xl px-4 py-8 flex flex-col justify-between w-full h-48">
        <button
          onClick={() => setNewModal(true)}
          className="w-12 h-12 rounded-lg border-[0.5px] border-green-400 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500"
        >
          <img src={ZUicons.video} className="h-4 w-6" />
        </button>
        <div>
          <p className="text-lg font-semibold tracking-wide">New Meeting</p>
          <p className="text-base font-normal">Setup an instant meeting</p>
        </div>
        {newModal && <NewMeetingModal setOpenModal={setNewModal} />}
      </div>
      <div className="bg-[#0E78F9] rounded-2xl px-4 py-8 flex flex-col justify-between w-full h-48">
        <button
          onClick={() => setJoinModal(true)}
          className="w-12 h-12 rounded-lg border-[0.5px] border-[#5ca0f3] flex items-center justify-center bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
        >
          <img src={ZUimages.ZuPlus} />
        </button>
        <div>
          <p className="text-lg font-semibold tracking-wide">Join Meeting</p>
          <p className="text-base font-normal">Via invitation Link</p>
        </div>
        {joinModal && <JoinMeetingModal setOpenModal={setJoinModal} />}
      </div>
      <div className="bg-[#0E78F9] rounded-2xl px-4 py-8 flex flex-col justify-between w-full h-48">
        <Button
          to=""
          className="w-12 h-12 rounded-lg border-[0.5px] border-[#5ca0f3] flex items-center justify-center bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
        >
          <img src={ZUicons.calendarplus} className="h-4 w-4" />
        </Button>
        <div>
          <p className="text-lg font-semibold tracking-wide">Schedule for later</p>
          <p className="text-base font-normal">Plan your meetings</p>
        </div>
      </div>
      <div className="bg-[#0E78F9] rounded-2xl px-4 py-8 flex flex-col justify-between w-full h-48">
        <Button
          to=""
          className=" rounded-lg border-[0.5px] border-[#5ca0f3]  bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
        >
          <img src={ZUicons.link} className="h-4 w-4" />
        </Button>
        <div>
          <p className="text-lg font-semibold tracking-wide">Get a Meeting Link</p>
          <p className="text-base font-normal">For instant meeting</p>
        </div>
      </div>
    </div>
  );
};

export default Actions;
