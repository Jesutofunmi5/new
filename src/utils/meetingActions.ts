import { ZUicons, ZUimages } from "assets";

export const meetingActions = [
  {
    id: "new",
    icon: ZUicons.video,
    task: "New Meeting",
    description: "Set-up your meeting",
    backgroundColor: "green",
    buttonSyle:
      "w-12 h-12 rounded-lg border-[0.5px] border-green-400 flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500"
  },
  {
    id: "join",
    icon: ZUimages.ZuPlus,
    task: "Join Meeting",
    description: "Via invitation Link",
    backgroundColor: "[#0E78F9]",
    buttonSyle:
      "w-12 h-12 rounded-lg border-[0.5px] border-[#5ca0f3] flex items-center justify-center bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
  },
  {
    id: "plan",
    icon: ZUicons.calendarplus,
    task: "Schedule for Later",
    description: "Plan your meetings",
    backgroundColor: "[#0E78F9]",
    buttonSyle:
      "w-12 h-12 rounded-lg border-[0.5px] border-[#5ca0f3] flex items-center justify-center bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
  },
  {
    id: "instant",
    icon: ZUicons.link,
    task: "Get A Meeting Link",
    description: "For instant meeting",
    backgroundColor: "[#0E78F9]",
    buttonSyle:
      "w-12 h-12 rounded-lg border-[0.5px] border-[#5ca0f3] flex items-center justify-center bg-gradient-to-r from-[#2E87F5] to-[#509cf9]"
  }
];
