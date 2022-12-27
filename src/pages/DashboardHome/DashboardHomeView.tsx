import { Actions, ActionsList } from "components/layouts/DashboardHome";

const DashBoardHomeView = () => {
  return (
    <div className="flex gap-4">
      <div className="w-2/5">
        <Actions />
      </div>
      <div className="w-3/5">
        <ActionsList />
      </div>
    </div>
  );
};

export default DashBoardHomeView;
