import { useNavigate } from "react-router";
import { LOGIN, Logindata } from "../../../constants";
import { useLoginMutation } from "../../../redux/services/authServices/authService";
import { useEffect } from "react";
import Form from "../../../components/Form/Form";
import "../../../css/style.css";

const LoginPage = () => {
  const [loginPayload, loginData] = useLoginMutation();
  const nav = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormSubmit = async (data: any) => {
    console.log("onclick");
    await loginPayload(data);
  };
  useEffect(() => {
    if (loginData.isSuccess) {
      localStorage.setItem("ACCESSTOKEN", loginData?.data?.token);
      localStorage.setItem("USERTYPE", loginData?.data?.userType);
      localStorage.setItem("USERNAME", loginData?.data?.userName);
    }
    if (localStorage.getItem("ACCESSTOKEN")) {
      nav(
        localStorage.getItem("USERTYPE") === "ADMIN"
          ? "/admin/dashboard"
          : "/user/dashboard"
      );
    }
  }, [loginData]);

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-5">
              <h5 className="mb-3">{LOGIN?.LOGINPAGEHEADING}</h5>
              <Form data={Logindata} onSubmit={handleFormSubmit} />
            </div>
            <div className="row">
              <div className="col-5"></div>
              <small className="col-7 ps-0 pe-0 mt-2  ">
                Don't have an account?
                <label
                  className="text-primary pointer"
                  onClick={() => {
                    nav("/signup");
                  }}
                >
                  Register
                </label>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
