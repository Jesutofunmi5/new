import * as Yup from "yup";
import { useFormik } from "formik";
import { Auth } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import SignupView from "./SignupViewwithForm";
import { register } from "redux/slices/auth.slice";
import { GOOGLE_END_POINT, LINKED_IN_END_POINT, MICROSOFT_END_POINT } from "services/CONSTANTS";

export const SignupContainerWF = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullname: ""
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string().required("Fullname is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        )
    }),

    onSubmit: (details) => {
      void dispatch(
        register({
          email: details.email,
          password: details.password,
          firstName: details.fullname.split(" ")[0],
          lastName: details.fullname.split(" ")[1]
        })
      );
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
        formik={formik}
        loading={isLoading}
        googleLogin={googleLogin}
        microsoftLogin={microsoftLogin}
        linkedLogin={linkedLogin}
      />
    </Auth>
  );
};
