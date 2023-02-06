import { useAppSelector } from "hooks";
import { Navigate, Outlet, useParams } from "react-router-dom";

interface INavigate {
  navigate: string;
}

const ProtectedRoute = ({ navigate }: INavigate) => {
  const { refId } = useParams();
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={navigate + (refId ? `?refId=${refId}` : "")} replace />
  );
};

export default ProtectedRoute;
