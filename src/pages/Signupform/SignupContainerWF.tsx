import { useFormik } from "formik";
import { Auth } from "components";
import { useAppDispatch } from "hooks";
import SignupView from "./SignupViewwithForm";
import { register } from "redux/slices/auth.slice";
import { GOOGLE_END_POINT, LINKED_IN_END_POINT, MICROSOFT_END_POINT } from "services/CONSTANTS";
// import { registerSchema } from "validations";

export const SignupContainerWF = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullname: ""
    },
    // validate: registerSchema,

    onSubmit: (details) => {
      console.log(details);
      dispatch(
        register({
          email: details.email,
          password: details.password,
          firstname: details.fullname.split(" ")[0],
          lastname: details.fullname.split(" ")[1]
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
  return (
    <Auth>
      <SignupView
        error={formik.errors}
        handleChange={formik.handleChange}
        handleSubmit={formik.handleSubmit}
        googleLogin={googleLogin}
        microsoftLogin={microsoftLogin}
        linkedLogin={linkedLogin}
      />
    </Auth>
  );
};
