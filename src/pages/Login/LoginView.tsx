import { Link } from "react-router-dom";

import { ZUimages } from "assets";
import { SIGNUP, FORGOT_PASSWORD } from "routes/CONSTANTS";
import { Button, Input, ZuAngleLeft } from "components";

interface Props {
  handleChange: (e: any) => void;
  handleSubmit: (e: any) => void;
  error: {
    email?: string;
    password?: string;
  };
  googleLogin: () => void;
  microsoftLogin: () => void;
  linkedLogin: () => void;
  formik: any;
}

const LoginView = ({
  handleSubmit,
  handleChange,
  googleLogin,
  linkedLogin,
  microsoftLogin,
  error
}: // formik
Props) => {
  return (
    <div className="w-full">
      <Link
        to={SIGNUP}
        className="mb-5 lg:mb-0 lg:absolute top-10 left-5 md:left-10 z-20 flex items-center space-x-2"
      >
        <ZuAngleLeft size={16} />
        <p className="font-bold">Back</p>
      </Link>
      <div className="w-full lg:w-2/3">
        <div className="w-full space-y-1">
          <h4 className="font-bold">Login your Account!</h4>
          <p className="text-lg text-gray-200 capitalize">
            For the purpose of industry regulation, your details are .
          </p>
        </div>

        <div className="w-full h-px my-5 bg-gray-100 shadow" />
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="email" className="block text-lg text-gray-200">
              Email address
            </label>
            <Input
              size="lg"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email address"
              onChange={handleChange}
              className="w-full"
            />
            <p className="text-red text-base ">{error.email}</p>
          </div>

          <div>
            <label htmlFor="password" className="block text-lg text-gray-200">
              Password
            </label>
            <Input
              size="lg"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              autoComplete="on"
              className="w-full"
            />
            <p className="text-red text-base ">{error.password}</p>
          </div>

          <div className="w-full flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Input size="sm" type="checkbox" className="accent-green" />
              <p className="capitalize text-lg text-gray-200">Remember me</p>
            </div>
            <Link to={FORGOT_PASSWORD} className="text-lg text-gray-200 hover:text-green">
              Forgot password?
            </Link>
          </div>
          <Button type="submit" size="lg" className="w-full bg-green">
            Login
          </Button>
        </form>
        <div className="my-5 w-full flex items-center">
          <div className="w-full h-px bg-gray-100 shadow" />
          <p className="px-5 text-base text-gray-200">Or</p>
          <div className="w-full h-px bg-gray-100 shadow" />
        </div>
        <div className="space-y-3">
          <h6 className="text-lg capitalize text-center">Login with social Accounts</h6>

          <div className="w-full flex items-center justify-center space-x-5">
            <button
              onClick={googleLogin}
              className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg bg-white"
            >
              <img src={ZUimages.gmail} className="w-6 h-6" alt="linkedin" />
            </button>
            <button
              onClick={microsoftLogin}
              className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg bg-white"
            >
              <img src={ZUimages.micro} className="w-6 h-6" alt="linkedin" />
            </button>
            <button
              onClick={linkedLogin}
              className="w-12 h-12 flex items-center justify-center rounded-md shadow-lg bg-white"
            >
              <img src={ZUimages.link} className="w-6 h-6" alt="linkedin" />
            </button>
          </div>
        </div>
        <p className="my-5 text-lg text-gray-200 text-center">
          Don't have an account?{" "}
          <Link to={SIGNUP}>
            <span className="text-primary">Create An Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
