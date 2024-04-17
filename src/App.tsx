import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import PageNotFound from "./pages/404/PageNotFound";
import Layout from "./components/Layout";
import { Signup } from "./pages/SignupPage/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Users from "./pages/users/Users";
import Files from "./pages/Files/Files";
import { AdminDashBoard } from "./pages/Admin/DashBoard/DashBoard";
import DashBoard from "./pages/Dashboard/Dashboard";
import Permission from "./pages/Permission/Permission";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  let timeout: NodeJS.Timeout | undefined;

  useEffect(() => {
    const resetTimer = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      timeout = setTimeout(() => {
        localStorage.clear();
        navigate("/");
      }, 300000);
    };

    const handleMouseOrKeyboardActivity = () => {
      resetTimer();
    };

    document.addEventListener("mousemove", handleMouseOrKeyboardActivity);
    document.addEventListener("keydown", handleMouseOrKeyboardActivity);

    if (location.pathname !== "/") {
      resetTimer();
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseOrKeyboardActivity);
      document.removeEventListener("keydown", handleMouseOrKeyboardActivity);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [navigate, location]);

  const userType: string = "ADMIN";

  const renderRoutes = () => {
    switch (userType) {
      case "ADMIN":
        return (
          <>
            <Route
              path="/admin/dashboard"
              element={<Layout Child={AdminDashBoard} />}
            />
            <Route path="/admin/users" element={<Layout Child={Users} />} />
            <Route path="/admin/files" element={<Layout Child={Files} />} />
            <Route
              path="/admin/Permission"
              element={<Layout Child={Permission} />}
            />
            <Route path="*" element={<Layout Child={PageNotFound} />} />
          </>
        );
      case "USER":
        return (
          <>
            <Route path="/dashboard" element={<Layout Child={DashBoard} />} />
            <Route path="*" element={<Layout Child={PageNotFound} />} />
          </>
        );
      default:
        return <Route path="*" element={<PageNotFound />} />;
    }
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<Signup />} />
      <Route element={<PrivateRoute />}>{renderRoutes()}</Route>
    </Routes>
  );
}

export default App;
