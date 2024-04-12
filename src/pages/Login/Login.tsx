import { useNavigate } from "react-router";
import { LOGIN, Logindata } from "../../constants";
import { useLoginMutation } from "../../redux/services/authServices/authService";
import { useEffect } from "react";
import Form from "../../components/Form/Form";

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
    }
    if (localStorage.getItem("ACCESSTOKEN")) {
      nav(
        localStorage.getItem("USERTYPE") === "ADMIN"
          ? "/admin/users"
          : "/dashboard"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
