import { Link } from "react-router-dom";

import { ZUimages } from "assets";
import { Button, Dropdown } from "components/widgets";
import { ZuFlagUnitedKingdom, ZuDown } from "components/icons";
import { CONTACT, HOME, LOGIN, SIGNUP } from "routes/CONSTANTS";

interface Props {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: Props) => {
  return (
    <div
      className={`${
        transparent ? "bg-transparent text-white" : "bg-black text-white"
      } w-full py-5 px-5 md:px-10 xl:px-20 flex items-center justify-between`}
    >
      <Link to={HOME}>
        <img src={ZUimages.logo} alt="logo" />
      </Link>

      <div className="hidden lg:inline-flex items-center space-x-3">
        <Dropdown
          button={
            <div className="flex items-center gap-2 cursor-pointer">
              <p>Product</p>
              <ZuDown size={10} />
            </div>
          }
        >
          <p></p>
        </Dropdown>
        <Link to={CONTACT}>Contact Us</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">Services</Link>
        <Link to="#">About Us</Link>
      </div>

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
    </div>
  );
};

export default Navbar;
