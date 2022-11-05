import { Routes, Route } from "react-router-dom";

import { Contact, Home } from "pages";
import { CONTACT, HOME } from "./CONSTANTS";

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
