/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Navigate, Outlet } from "react-router-dom";
import { DASHBOARD } from "routes/CONSTANTS";

const useAuth = () => {
  // get item from localstorage
  let user: any;
  const _user = localStorage.getItem("user");

  if (_user) {
    user = JSON.parse(_user);
    console.log("user", user);
  }
  if (user) {
    return {
      auth: true
    };
  } else {
    return {
      auth: false
    };
  }
};

const PublicRoutes = () => {
  const { auth } = useAuth();

  return auth ? <Navigate to={DASHBOARD} replace /> : <Outlet />;
};

export default PublicRoutes;
