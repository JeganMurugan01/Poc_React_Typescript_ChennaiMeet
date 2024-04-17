import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const accessToken = localStorage.getItem("ACCESSTOKEN");
  useEffect(() => {
    if (!accessToken) {
      window.location.href = "/";
    }
  }, []);

  return accessToken && <Outlet />;
};

export default PrivateRoute;
