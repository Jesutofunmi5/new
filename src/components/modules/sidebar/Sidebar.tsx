import { NavLink } from "react-router-dom";
import { BROADCASTCHANNEL, CALENDER, DASHBOARD, REFER_A_FRIEND, SETTINGS } from "routes/CONSTANTS";

const Sidebar = () => {
  return (
    <div className=" flex flex-col gap-8 pt-12 px-8 bg-white h-screen w-full">
      <div className="mb-4">LOGO</div>
      <NavLink
        to={DASHBOARD}
        className={({ isActive }) =>
          isActive ? "bg-green-600 rounded-md text-white p-2" : "text-gray-200 p-2"
        }
      >
        <span className="text-lg font-normal py-4">Home</span>
      </NavLink>

      <NavLink
        to={CALENDER}
        className={({ isActive }) =>
          isActive ? "bg-green-600 rounded-md text-white p-2" : "text-gray-200 p-2"
        }
      >
        <span className="text-lg font-normal py-4">Calender</span>
      </NavLink>

      <NavLink
        to={BROADCASTCHANNEL}
        className={({ isActive }) =>
          isActive ? "bg-green-600 rounded-md text-white p-2" : "text-gray-200 p-2"
        }
      >
        <span className="text-lg font-normal py-4">Broadcast Channel</span>
      </NavLink>

      <NavLink
        to={REFER_A_FRIEND}
        className={({ isActive }) =>
          isActive ? "bg-green-600 rounded-md text-white p-2" : "text-gray-200 p-2"
        }
      >
        <span className="text-lg font-normal py-4">Refer a Friend</span>
      </NavLink>

      <NavLink
        to={SETTINGS}
        className={({ isActive }) =>
          isActive ? "bg-green-600 rounded-md text-white p-2" : "text-gray-200 p-2"
        }
      >
        <span className="text-lg font-normal py-4">Settings</span>
      </NavLink>

      <NavLink to="" className="">
        Logout
      </NavLink>
    </div>
  );
};
export default Sidebar;
