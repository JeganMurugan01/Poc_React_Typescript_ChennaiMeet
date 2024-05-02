/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../../components/Form/Form";
import { SignupData, SignupPageConstant } from "../../../constants";
import { useSignUpMutation } from "../../../redux/services/authServices/authService";

export const Signup = () => {
  const nav = useNavigate();
  const [signUpPayload, signUpdar] = useSignUpMutation();

  useEffect(() => {
    if (signUpdar.isSuccess) {
      window.alert("User created Successfully !");
      nav("/");
    }
  }, [signUpdar.isSuccess]);

  const handleFormSubmit = async (data: any) => {
    await signUpPayload(data);
  };

  return (
    <>
      <div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="mt-5">
                <h5 className="mb-3">
                  {SignupPageConstant?.SIGNUPPAGEHEADING}
                </h5>
                <Form data={SignupData} onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
