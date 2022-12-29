import { useState } from "react";
import { ZUicons, ZUimages } from "assets";
import { Button, CenterLoader } from "components/widgets";
import { JoinMeetingModal, NewMeetingModal } from "components/modules/modals";
import randomString from "random-string";
import { MeetingService } from "services";
import { toast } from "react-toastify";
import { formatErrorResponse } from "utils";
import env from "configs";

const Actions = () => {
  const [newModal, setNewModal] = useState(false);
  const [joinModal, setJoinModal] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCreateNewMeeting = async (): Promise<void> => {
    setIsLoading(true);
    const meetingId = randomString({ length: 10 });
    const response: any = await MeetingService.createMeeting({ meetingId });
    setIsLoading(false);
    if (response.STATUS === "SUCCESS") {
      toast.success(response.MESSAGE);
      window.open(`${env.MEETING_BASE_URL}/${meetingId}`);
    } else toast.error(formatErrorResponse(response));
  };
  return (
    <div className=" grid grid-cols-2 gap-4 text-white">
      <div
        onClick={() => {
          void handleCreateNewMeeting();
        }}
        className="bg-green cursor-pointer rounded-2xl px-4 py-8 flex flex-col justify-between w-full h-48"
      >
        <button className="w-12 h-12 rounded-lg border-[0.5px] border-green-400 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500">
          <img src={ZUicons.video} className="h-4 w-6" />
        </button>
        <div>
          <p className="text-lg font-semibold tracking-wide">New Meeting</p>
          <p className="text-base font-normal">Setup an instant meeting</p>
        </div>
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
      {joinModal && <JoinMeetingModal setOpenModal={setJoinModal} />}
      {newModal && <NewMeetingModal setOpenModal={setNewModal} />}
      {isLoading && <CenterLoader />}
    </div>
  );
};

export default Actions;
