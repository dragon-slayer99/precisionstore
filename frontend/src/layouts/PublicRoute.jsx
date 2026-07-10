import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function PublicRoute() {
  const { authenticated } = useAuth();

  return authenticated ? (
    <Navigate to={"/"} replace={false} />
  ) : (
    <Outlet />
  );
}

export default PublicRoute;
