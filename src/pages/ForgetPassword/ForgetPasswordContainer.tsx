import { useFormik } from "formik";

import { Auth } from "components";
import ForgetPasswordView from "./ForgetPasswordView";
// import { forgotPasswordSchema } from "validations";

export const ForgetPasswordContainer = () => {
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    // validate: forgotPasswordSchema,
    onSubmit: (data) => {
      console.log("data: ", data);
    }
  });

  return (
    <Auth>
      <ForgetPasswordView
        error={formik.errors}
        details={formik.values}
        handleChange={formik.handleChange}
        handleSubmit={formik.handleSubmit}
      />
    </Auth>
  );
};
