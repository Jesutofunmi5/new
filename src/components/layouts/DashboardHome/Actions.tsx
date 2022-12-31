import { useState } from "react";
import { Modal } from "components/modules/modals";
import { JoinMeetingForm, MeetingLink, NewMeetingForm, PlanMeetingForm } from "components/modules";
import { meetingActions } from "utils";

type ModalId = string | null;

const Actions = () => {
  const [openModal, setOpenModal] = useState<ModalId | null>(null);

  return (
    <div className=" grid grid-cols-2 gap-4 text-white">
      {meetingActions.map((action) => (
        <div
          key={action.id}
          className={`rounded-2xl px-4 py-8 flex flex-col justify-between w-full h-48 bg-${action.backgroundColor}`}
        >
          <button onClick={() => setOpenModal(action.id)} className={`${action.buttonSyle}`}>
            <img src={action.icon} className="h-4 w-4" />
          </button>
          <div>
            <p className="text-lg font-semibold tracking-wide">{action.task}</p>
            <p className="text-base font-normal">{action.description}</p>
          </div>
        </div>
      ))}

      {openModal === "new" && (
        <Modal
          size="md:h-[666px] h-full md:w-[653px] w-full"
          content={<NewMeetingForm />}
          title="Schedule a Meeting"
          setOpenModal={() => setOpenModal(null)}
        />
      )}

      {openModal === "join" && (
        <Modal
          size="md:h-[666px] h-full md:w-[653px] w-full"
          content={<JoinMeetingForm />}
          title="Join Meeting"
          setOpenModal={() => setOpenModal(null)}
        />
      )}

      {openModal === "plan" && (
        <Modal
          size="md:h-[666px] h-full md:w-[653px] w-full"
          content={<PlanMeetingForm />}
          title="Schedule for Later"
          setOpenModal={() => setOpenModal(null)}
        />
      )}

      {openModal === "instant" && (
        <Modal
          size="md:h-[666px] h-full md:w-[653px] w-full"
          content={<MeetingLink />}
          title="Get a meeting Link"
          setOpenModal={() => setOpenModal(null)}
        />
      )}
    </div>
  );
};

export default Actions;
