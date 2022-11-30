import { useFormik } from "formik";

import { Auth } from "components";
import ResetPasswordView from "./ResetPasswordView";
import { UserService } from "services";
import { useNavigate, useParams } from "react-router-dom";
import { LOGIN } from "routes/CONSTANTS";
// import { resetPasswordSchema } from "validations";

export const ResetPasswordContainer = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    // validate: resetPasswordSchema,

    onSubmit: (details) => {
      console.log(details);
      UserService.resetPassword({
        token,
        password: details.password
      })

        .then((res) => {
          console.log(res);
          navigate(LOGIN);
        })
        .catch((err) => console.error(err));
    }
  });
  return (
    <Auth>
      <ResetPasswordView
        error={formik.errors}
        details={formik.values}
        handleChange={formik.handleChange}
        handleSubmit={formik.handleSubmit}
      />
    </Auth>
  );
};
