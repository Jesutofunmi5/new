/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import * as Yup from "yup";
import { useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Auth } from "components";
import { HOME } from "routes/CONSTANTS";
import { confirmAccount, login, loginSuccess } from "redux/slices/auth.slice";
import { useAppDispatch, useAppSelector, useQuery } from "hooks";
import { GOOGLE_END_POINT, LINKED_IN_END_POINT, MICROSOFT_END_POINT } from "services/CONSTANTS";

import LoginView from "./LoginView";

export const LoginContainer = () => {
  const { confirmationCode } = useParams();
  const query = useQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const queryString = query.get("redirect");
    if (queryString) {
      if (queryString === "success") {
        void dispatch(loginSuccess());
      } else {
        const errorMessage = query.get("error");
        if (errorMessage) {
          if (errorMessage?.length > 0 && errorMessage !== "undefined") {
            toast.error(errorMessage);
          }
        }
      }
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
          "Weak Password. Password must have at least: 1 upper case, 1 digit, 1 special character, Minimum eight in length"
        )
    }),
    onSubmit: (details) => {
      console.log(details);
      dispatch(login(details))
        .unwrap()
        .then(() => {
          navigate(HOME);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  });

  useEffect(() => {
    if (confirmationCode !== undefined) {
      dispatch(confirmAccount(confirmationCode))
        .unwrap()
        .then(({ email }) => {
          void formik.setValues({ ...formik.values, email });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

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
    <Auth reverse>
      <LoginView
        formik={formik}
        loading={isLoading}
        googleLogin={googleLogin}
        microsoftLogin={microsoftLogin}
        linkedLogin={linkedLogin}
      />
    </Auth>
  );
};
