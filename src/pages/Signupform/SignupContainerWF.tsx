import { useState } from "react";
import { Auth } from "components";
import SignupView from "./SignupViewwithForm";

export const SignupContainerWF = () => {
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
    } else if (name === "password") {
      if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(value)) {
        setError({
          ...error,
          [name]:
            "Password must contain at least one lower case alphabet, one uppercase alphabet, one number and one special character "
        });
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
      <SignupView
        error={error}
        details={details}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Auth>
  );
};
