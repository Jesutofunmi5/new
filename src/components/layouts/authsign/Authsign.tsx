import { Link, useLocation } from "react-router-dom";

import { ZUimages } from "assets";
import { HOME, LOGIN } from "routes/CONSTANTS";
import { Dropdown } from "components/widgets";
import { ZuDown, ZuFlagUnitedKingdom } from "components/icons";

import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const { pathname } = useLocation();
  return (
    <div className="relative w-full min-h-screen lg:h-screen flex">
      <div className="flex items-center justify-between absolute top-0 left-0 right-0 pt-10 px-5 md:px-10 lg:px-20 z-20">
        <Link to={HOME}>
          <img src={ZUimages.logo} alt="logo" className="" />
        </Link>
      </div>
      <div className="relative hidden lg:flex w-2/5 h-full items-center bg-green-100">
        <div className="w-full h-full absolute pt-20 -left-10 xl:-left-20">
          <img src={ZUimages.authBackground} className="w-full h-full" />
        </div>
      </div>
      <div className="relative w-full lg:w-3/5 h-full pt-20 px-5 md:px-10 lg:px-20 flex">
        {pathname === "/auth/signup" ? (
          <div className="absolute top-10 right-5 md:right-10 lg:right-20 z-20">
            <p className="text-lg leading-6 font-normal text-greyish">
              Already have an account?
              <Link to={LOGIN}>
                <span className="text-firstboxb"> Sign In</span>
              </Link>
            </p>
          </div>
        ) : (
          <>
            <Link
              to={HOME}
              className="flex items-center justify-between w-65 absolute left-54 top-10"
            >
              {/* // className="flex items-center justify-between w-65 absolute top-10 left-54" */}
              <img src={ZUimages.backarr} alt="" />
              <p className="text-lg leading-6 font-bold text-individual">Back</p>
            </Link>

            <div className="absolute top-10  right-5 md:right-10 lg:right-20 z-20">
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
          </>
        )}
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
