import * as Yup from "yup";
import { useFormik } from "formik";

import { Auth } from "components";
import { useAppDispatch, useAppSelector } from "hooks";
import { forgotPassword } from "redux/slices/auth.slice";
import ForgetPasswordView from "./ForgetPasswordView";

export const ForgetPasswordContainer = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Email is required")
    }),
    onSubmit: (details) => {
      console.log("data: ", details);
      void dispatch(forgotPassword(details));
    }
  });

  return (
    <Auth>
      <ForgetPasswordView loading={isLoading} formik={formik} />
    </Auth>
  );
};
