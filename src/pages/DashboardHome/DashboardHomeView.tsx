import { Actions, ActionsList } from "components/layouts/DashboardHome";

const DashBoardHomeView = () => {
  return (
    <div className=" flex gap-4">
      <Actions />
      <ActionsList />
    </div>
  );
};

export default DashBoardHomeView;
