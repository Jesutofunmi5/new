import { useFormik } from "formik";

import { Auth } from "components";
import { useAppDispatch } from "hooks";
import LoginView from "./LoginView";
import { login } from "redux/slices/auth.slice";
import { GOOGLE_END_POINT, LINKED_IN_END_POINT, MICROSOFT_END_POINT } from "services/CONSTANTS";
// import { loginSchema } from "validations";

export const LoginContainer = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    // validate: loginSchema,

    onSubmit: (details) => {
      console.log(details);
      dispatch(
        login({
          email: details.email,
          password: details.password
        })
      )
        .unwrap()
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    }
  });

  const googleLogin = () => {
    window.open(GOOGLE_END_POINT, "_self");
  };
  const microsoftLogin = () => {
    window.open(MICROSOFT_END_POINT, "_self");
  };
  const linkedLogin = () => {
    window.open(LINKED_IN_END_POINT, "_self");
  };
  // console.log(formik.values);
  return (
    <Auth>
      <LoginView
        error={formik.errors}
        handleChange={formik.handleChange}
        handleSubmit={formik.handleSubmit}
        googleLogin={googleLogin}
        microsoftLogin={microsoftLogin}
        linkedLogin={linkedLogin}
        formik={formik}
      />
    </Auth>
  );
};
