/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { FormikProps } from "formik";

import { LOGIN } from "routes/CONSTANTS";
import { Button, Input, Loader } from "components";

interface Props {
  loading: boolean;
  formik: FormikProps<{ email: string }>;
}

const ForgetPasswordView = ({ formik, loading }: Props) => {
  return (
    <div className="w-full lg:w-2/3 lg:mt-20 space-y-20">
      <div className="w-full space-y-1">
        <h4 className="font-bold">Forget Password</h4>
        <p className="text-lg text-gray-200 capitalize">
          Enter the email you used to create your account so we can send you instructions on how to
          reset your password.
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="email" className="block text-lg text-gray-200">
            Email
          </label>
          <Input
            size="lg"
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            onChange={formik.handleChange}
            className="w-full"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red text-base ">{formik.errors.email}</p>
          )}
        </div>

        <Button size="lg" className="w-full flex items-center justify-center bg-green">
          {loading ? <Loader /> : "Send"}
        </Button>
        <Button to={LOGIN} size="lg" variant="outline" className="mt-5 w-full">
          Back To Login
        </Button>
      </form>
    </div>
  );
};

export default ForgetPasswordView;
