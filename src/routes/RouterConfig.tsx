import { Routes, Route } from "react-router-dom";

import { Contact, ForgetPassword, Home, Login, ResetPassword, Signup, Signupform } from "pages";
import {
  CONTACT,
  FORGOT_PASSWORD,
  HOME,
  LOGIN,
  RESET_PASSWORD,
  SIGNUP,
  SIGNUPFORM
} from "./CONSTANTS";

import type { FC } from "react";
import { ProtectedRoute, PublicRoute } from "components";

const RouterConfig: FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          {/* Public routes should be placed in here */}
          <Route path={HOME} element={<Home />} />
          <Route path={CONTACT} element={<Contact />} />

          {/* Auth pages */}
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGNUP} element={<Signup />} />
          <Route path={SIGNUPFORM} element={<Signupform />} />
          <Route path={RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={FORGOT_PASSWORD} element={<ForgetPassword />} />
        </Route>

        <Route path="/" element={<ProtectedRoute />}>
          {/* Protected routes should be placed in here */}
        </Route>

        {/* 404 page */}
        <Route path="*" element={<div>Page not found: 404</div>} />
      </Routes>
    </div>
  );
};

export default RouterConfig;
