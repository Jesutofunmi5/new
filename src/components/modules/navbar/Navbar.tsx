import { Link } from "react-router-dom";

import NavLink from "./NavLink";
import { ZUimages } from "assets";
import { logout } from "redux/slices/auth.slice";
import { Button, Dropdown } from "components/widgets";
import { useAppDispatch, useAppSelector } from "hooks";
import { ZuFlagUnitedKingdom, ZuDown, ZuLogout } from "components/icons";
import { ABOUT, CONTACT, HOME, LOGIN, SIGNUP } from "routes/CONSTANTS";

interface Props {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: Props) => {
  const dispatch = useAppDispatch();
  const { user, isLoggedIn } = useAppSelector((state) => state.auth);

  const handleLogout = () => {
    void dispatch(logout());
  };

  return (
    <div
      className={`${
        transparent ? "bg-transparent" : "bg-black"
      } text-white w-full py-5 px-5 md:px-10 xl:px-20 flex items-center justify-between`}
    >
      <Link to={HOME}>
        <img src={ZUimages.logo} alt="logo" />
      </Link>

      <div className="hidden lg:inline-flex items-center space-x-3">
        <Dropdown
          button={
            <div className="flex items-center gap-2 cursor-pointer">
              <p>Products</p>
              <ZuDown size={10} />
            </div>
          }
        >
          <p></p>
        </Dropdown>
        <NavLink to={CONTACT}>Contact Us</NavLink>
        <NavLink to="#">Pricing</NavLink>
        <NavLink to="#">Services</NavLink>
        <NavLink to={ABOUT}>About Us</NavLink>
      </div>

      {!isLoggedIn ? (
        <div className="hidden lg:inline-flex items-center space-x-3">
          <Button to={LOGIN} variant="outline">
            Sign In
          </Button>
          <Button to={SIGNUP}>Create an Account</Button>
          <Dropdown
            button={
              <div className="flex items-center gap-2 px-1 py-px border-2  b border-white rounded-lg cursor-pointer">
                <ZuFlagUnitedKingdom size={20} />
                <ZuDown size={10} />
              </div>
            }
          >
            <></>
          </Dropdown>
        </div>
      ) : (
        <div className="hidden lg:inline-flex items-center space-x-3">
          <p>Welcome {user.user.name.firstName}</p>
          <Dropdown
            button={
              <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
                <img src={ZUimages.user1} className="w-full h-full object-cover" />
              </div>
            }
          >
            <>
              <button onClick={handleLogout} className="w-full flex items-center gap-1">
                <ZuLogout className="text-red" />
                <p className="text-base text-red">Logout</p>
              </button>
            </>
          </Dropdown>
          <Dropdown
            button={
              <div className="flex items-center gap-2 px-1 py-px border-2  b border-white rounded-lg cursor-pointer">
                <ZuFlagUnitedKingdom size={20} />
                <ZuDown size={10} />
              </div>
            }
          >
            <></>
          </Dropdown>
        </div>
      )}
    </div>
  );
};

export default Navbar;
