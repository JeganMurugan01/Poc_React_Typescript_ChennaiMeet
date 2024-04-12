import  { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import DashBoard from "./pages/DashBoard/DashBoard";
import PrivateRoute from "./Components/PrivateRoute";
import { Signup } from "./pages/SignupPage/sigup";
import Header from "./Components/Header";
import Layout from "./Components/layout";
import Project from "./pages/ProjectFile";
import Users from "./pages/Users/Users";
import PageNotFound from "./pages/404/PageNotFound";

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
      }, 60000); // 1 minute timeout
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
            <Route path="/users" element={<Layout Child={<Users />} />} />
            <Route path="*" element={<Layout Child={<PageNotFound />} />} />
          </>
        );
      case "USER":
        return (
          <>
            <Route
              path="/dashboard"
              element={<Layout Child={<DashBoard />} />}
            />
            <Route path="/project" element={<Layout Child={<Project />} />} />
            <Route path="*" element={<Layout Child={<PageNotFound />} />} />
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
      <Route element={<PrivateRoute />}>
        <Route element={<Header />} />
        {renderRoutes()}
      </Route>
    </Routes>
  );
}

export default App;
