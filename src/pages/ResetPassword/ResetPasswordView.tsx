/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Button, Input, Loader } from "components";
import { FormikProps } from "formik";
import { LOGIN } from "routes/CONSTANTS";

interface Props {
  loading: boolean;
  formik: FormikProps<{ password: string; confirmPassword: string }>;
}

const ResetPasswordView = ({ formik, loading }: Props) => {
  return (
    <div className="w-full lg:w-2/3 lg:mt-20 space-y-20">
      <div className="w-full space-y-1">
        <h4 className="font-bold">Reset Password</h4>
        <p className="text-lg text-gray-200 capitalize">Choose A New Password For Your Account</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-lg text-gray-200">
            Password
          </label>
          <Input
            size="lg"
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
            onChange={formik.handleChange}
            className="w-full"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red text-base ">{formik.errors.password}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-lg text-gray-200">
            Confirm Password
          </label>
          <Input
            size="lg"
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm password"
            onChange={formik.handleChange}
            className="w-full"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red text-base ">{formik.errors.confirmPassword}</p>
          )}
        </div>

        <Button size="lg" className="w-full flex items-center justify-center bg-green">
          {loading ? <Loader /> : "Resend Email"}
        </Button>
        <Button to={LOGIN} size="lg" variant="outline" className="mt-5 w-full">
          Back To Login
        </Button>
      </form>
    </div>
  );
};

export default ResetPasswordView;
