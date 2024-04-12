import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const PrivateRoute = () => {
  useEffect(() => {
    const accessToken = localStorage.getItem("ACCESSTOKEN");
    if (!accessToken) {
      window.location.href = "/";
    }
  }, []);

  return <Outlet />;
};

export default PrivateRoute;
