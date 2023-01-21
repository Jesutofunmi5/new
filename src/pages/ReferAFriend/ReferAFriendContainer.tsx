import { Dashboard } from "components";
import ReferAFriendView from "./ReferAFriendView";

export const ReferAFriendContainer = () => {
  const referralMessage = `Achieve more with the Zumaridi Video Conferencing!
  Trust me, you won't regret it!`;
  return (
    <Dashboard>
      <ReferAFriendView
        referral="https://www.zumaridi.com/invites/11AA232aq33"
        title={referralMessage}
      />
    </Dashboard>
  );
};
