import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import LoginPage from "./pages/auth/Login/Login";
import PageNotFound from "./pages/404/PageNotFound";
import Layout from "./components/Layout";
import { Signup } from "./pages/auth/SignupPage/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Users from "./pages/Admin/users/Users";
import Files from "./pages/Admin/Files/Files";
import { AdminDashBoard } from "./pages/Admin/DashBoard/DashBoard";
import Permission from "./pages/Admin/Permission/Permission";
import { UserProfile } from "./pages/Admin/UserProfile/UserProfile";
import Editor from "./pages/User/Editor/Editor";
import { UserDashboard } from "./pages/User/Dashboard";
import { Domain } from "./pages/User/Domain";
import Questions from "./pages/User/Questions/Questions";

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

  const renderRoutes = () => {
    switch (localStorage.getItem("USERTYPE")) {
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
            <Route
              path="/admin/userDetails"
              element={<Layout Child={UserProfile} />}
            />
            <Route path="*" element={<Layout Child={PageNotFound} />} />
          </>
        );
      case "USER":
        return (
          <>
            <Route
              path="/user/dashboard"
              element={<Layout Child={UserDashboard} />}
            />
            <Route path="/user/compiler" element={<Layout Child={Editor} />} />
            <Route path="/user/domain" element={<Layout Child={Domain} />} />
            <Route
              path="/user/questions"
              element={<Layout Child={Questions} />}
            />
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
