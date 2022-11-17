import { Link } from "react-router-dom";

import { ZUimages } from "assets";
import { HOME } from "routes/CONSTANTS";
import { Dropdown } from "components/widgets";
import { ZuDown, ZuFlagUnitedKingdom } from "components/icons";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AuthLayout = ({ children }: Props) => {
  return (
    <div className="relative w-full h-screen flex">
      <div className="flex items-center justify-between absolute top-0 left-0 right-0 pt-10 px-5 md:px-10 lg:px-20 z-20">
        <Link to={HOME}>
          <img src={ZUimages.logo} alt="logo" className="" />
        </Link>
      </div>
      <div className="w-2/5 bg-green-100">
        <img src={ZUimages.authBackground} className="w-full h-full" />
      </div>
      <div className="relative w-3/5 h-full pt-20 px-5 md:px-10 lg:px-20 flex">
        <div className="absolute top-10 right-5 md:right-10 lg:right-20 z-20">
          <Dropdown
            button={
              <div className="flex items-center gap-2 px-1 py-px border-2  b border-black rounded-md cursor-pointer">
                <ZuFlagUnitedKingdom size={20} color={"#000000"} className="text-black" />
                <ZuDown size={10} />
              </div>
            }
          >
            <></>
          </Dropdown>
        </div>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
