import * as Yup from "yup";
import { useFormik } from "formik";
// import { toast } from "react-toastify";

import { Auth } from "components";
// import { register } from "redux/slices/auth.slice";
import {
  //  useAppDispatch,
  useAppSelector
} from "hooks";
import { GOOGLE_END_POINT, LINKED_IN_END_POINT, MICROSOFT_END_POINT } from "services/CONSTANTS";

import SignupBusinessView from "./SignupBusinessView";

export const SignupBusinessContainer = () => {
  // const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  const formik = useFormik({
    initialValues: {
      name: "",
      industry: "",
      email: "",
      phone: "",
      address: "",
      website: "",
      password: "",
      terms: false
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Business name is required"),
      industry: Yup.string().required("Business Industry is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      address: Yup.string().required("Address is required"),
      website: Yup.string().required("Website is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        ),
      terms: Yup.boolean().isTrue("Terms and condition not accepted")
    }),

    onSubmit: (details) => {
      console.log(details);
      // void dispatch(
      //   register({
      //     email: details.email,
      //     password: details.password,
      //     firstName: details.fullname.split(" ")[0],
      //     lastName: details.fullname.split(" ")[1]
      //   })
      // )
      //   .unwrap()
      //   .then((res) => {
      //     setTimeout(() => {
      //       toast.success(
      //         // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      //         `Verification Link has been sent to this email "${res.email}", kindly follow the instruction in the mail to verify your account`
      //       );
      //     }, 5000);
      //   });
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
      <SignupBusinessView
        formik={formik}
        loading={isLoading}
        googleLogin={googleLogin}
        microsoftLogin={microsoftLogin}
        linkedLogin={linkedLogin}
      />
    </Auth>
  );
};
