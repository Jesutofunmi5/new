import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN } from "routes/CONSTANTS";
import { ZUimages } from "assets";

const SignupViewwithForm = () => {
  const [inputs, setInputs] = useState("");
  const [emessage, seteMessage] = useState("");
  const [pmessage, setpMessage] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [errorCheck, setErrorCheck] = useState(false);

  const handleChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };
  const handlePasswordChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
    function validate(value: any) {
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value)) {
        setpMessage(" ");
        setErrorCheck(false);
      } else {
        setpMessage(
          "password must contain at least one lower case alphabet, one uppercase alphabet, one number and one special character "
        );
        setErrorCheck(true);
      }
    }
    validate(value);
  };
  const handleEmailChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
    function validate(value: any) {
      if (/^\w+(\.[-]?\w+)*@\w+(\.[-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        seteMessage(" ");
        setErrorCheck(false);
      } else {
        seteMessage("enter a valid email");
        setErrorCheck(true);
      }
    }
    validate(value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(inputs);
    console.log(errorCheck);
  };

  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };
  return (
    <>
      <div className="w-forh">
        <h4 className="text-reg font-bold leading-regl text-individual">
          Register Individual Account!
        </h4>
        <p className="text-lg leading-6 font-normal text-greyish capitalize mt-1.5">
          For the purpose of industry regulation, your details are required.
        </p>
        <div className="w-full border-t-whiteish border-t-1 mt-5"></div>
        <form onSubmit={handleSubmit} className="mt-5">
          <label htmlFor="username" className="block text-lg leading-6 font-normal text-formgrey">
            Your fullname*
          </label>
          <input
            type="text"
            name="username"
            required
            placeholder="Invictus Innocent"
            onChange={handleChange}
            className="mt-3 flex items-center pl-30  rounded-md w-lif h-64 focus:border-green focus:border-1 "
          />
          <label
            htmlFor="email"
            className="block text-lg leading-6 font-normal text-formgrey mt-21"
          >
            Email address*
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter email address"
            onChange={handleEmailChange}
            className="mt-3 flex items-center pl-30  w-lif rounded-md h-64 focus:border-green focus:border-1"
          />
          <p className="text-red text-base ">{emessage}</p>
          <label
            htmlFor="password"
            className="block text-lg leading-6 font-normal text-formgrey mt-21"
          >
            Create password*
          </label>
          <div className="relative w-lif">
            <input
              type={passwordType}
              name="password"
              id="pass"
              required
              placeholder="Enter password"
              onChange={handlePasswordChange}
              autoComplete="on"
              className="mt-3 pl-30  w-lif rounded-md h-64 focus:border-green focus:border-1"
            />
            <p className="text-red text-base ">{pmessage}</p>
            <button
              type="button"
              className="absolute right-6 top-32 text-base font-normal leading-showbtn text-individual"
              onClick={showPassword}
            >
              Show
            </button>
          </div>

          <div className="flex mt-21">
            <input type="checkbox" required className="accent-green" name="" id="" />
            <p className="ml-5 flex items-center capitalize text-lg leading-6 font-normal text-greyish">
              I agree to terms & conditions
            </p>
          </div>

          {/* <input
            type="submit"
            value="Register Account"
            className="w-lif h-64 bg-green text-whiteish font-normal text-lg leading text-center rounded-md mt-37"
          /> */}
          <button className="w-lif h-64 bg-green text-whiteish font-normal text-lg leading text-center rounded-md mt-37">
            Register Account
          </button>
        </form>
        <div className="flex justify-between mt-ind">
          <div className="border-whiteish border-t-1 border-solid inline-block"></div>
          <p className="text-base font-normal leading-showbtn text-formgreyer">Or</p>
          <div className="border-t-whiteish border-t-1 border-solid inline-block"></div>
        </div>
        <h6 className="text-lg leading-6 font-normal text-individual capitalize text-center mt-21">
          Register with social Accounts
        </h6>
        <div className="flex justify-center mt-21">
          <div className=" relative w-64 h-64 flex items-center justify-center">
            <img src={ZUimages.allbox} alt="" />
            <img src={ZUimages.gmail} className="absolute" alt="" />
          </div>
          <div className=" relative w-64 h-64 flex items-center justify-center ml-55">
            <img src={ZUimages.allbox} alt="" />
            <img src={ZUimages.micro} className="absolute" alt="" />
          </div>
          <div className=" relative w-64 h-64 flex items-center justify-center ml-55">
            <img src={ZUimages.allbox} alt="" />
            <img src={ZUimages.link} className="absolute" alt="" />
          </div>
        </div>
        <p className="text-lg leading-6 font-normal text-greyish text-center mt-29 mb-10">
          Already have an account?
          <Link to={LOGIN}>
            <span className="text-firstboxb"> Sign In</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignupViewwithForm;
