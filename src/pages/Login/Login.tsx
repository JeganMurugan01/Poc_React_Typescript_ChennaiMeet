import { useNavigate } from "react-router";
import { Login, Logindata } from "../../constants";
import { useLoginMutation } from "../../redux/services/authServices/authService";
import { useEffect } from "react";
import { authApi } from "../../redux/services/authServices/authService"; // Import authApi
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
      console.log("navigate");
    }
    if (localStorage.getItem("ACCESSTOKEN")) {
      nav("/dashboard");
    }
  }, [loginData]);

  // Intercept requests to set the access token in the headers
  useEffect(() => {
    const unsubscribe = authApi.middlewareApi.subscribe((event) => {
      if (event.type === 'api/createQuery') {
        event.dispatch(api => {
          const token = localStorage.getItem("ACCESSTOKEN");
          if (token) {
            api.headers.set('Authorization', `Bearer ${token}`);
          }
        });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="mt-5">
              <h5 className="mb-3">{Login?.LOGINPAGEHEADING}</h5>
              <Form data={Logindata} onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
