import { Routes, Route } from "react-router-dom";

import {
  Contact,
  ForgetPassword,
  Home,
  Pricing,
  Login,
  ResetPassword,
  Signup,
  Signupform
} from "pages";
import {
  CONTACT,
  FORGOT_PASSWORD,
  HOME,
  LOGIN,
  LOGIN_CONFIRM,
  RESET_PASSWORD,
  SIGNUP,
  SIGNUPFORM,
  PRICING
} from "./CONSTANTS";

import type { FC } from "react";
import { ProtectedRoute, PublicRoute } from "components";

const RouterConfig: FC = () => {
  return (
    <div>
      <Routes>
        {/* Public routes should be placed in here */}
        <Route path={HOME} element={<Home />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path={PRICING} element={<Pricing />} />
        <Route path="/" element={<PublicRoute />}>
          {/* Auth pages */}
          <Route path={LOGIN} element={<Login />} />
          <Route path={LOGIN_CONFIRM} element={<Login />} />
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
