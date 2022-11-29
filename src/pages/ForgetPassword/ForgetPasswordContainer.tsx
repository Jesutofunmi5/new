import { useState } from "react";
import { Auth } from "components";
import ForgetPasswordView from "./ForgetPasswordView";

export const ForgetPasswordContainer = () => {
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState({
    fullname: "",
    email: "",
    password: ""
  });

  const handleChange = (e: any) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (/^\w+(\.[-]?\w+)*@\w+(\.[-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        setError({ ...error, [name]: "Enter a valid email" });
      }
    }

    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(details);
  };
  return (
    <Auth>
      <ForgetPasswordView
        error={error}
        details={details}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Auth>
  );
};
