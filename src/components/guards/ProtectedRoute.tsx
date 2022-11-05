/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { LOGIN } from "routes/CONSTANTS";
import { Navigate, Outlet } from "react-router-dom";

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

const ProtectedRoute = () => {
  const { auth } = useAuth();

  return auth ? <Outlet /> : <Navigate to={LOGIN} replace />;
};

export default ProtectedRoute;
