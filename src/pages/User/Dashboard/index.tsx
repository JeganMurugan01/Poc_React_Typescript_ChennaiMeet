/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import {
  DashboardLable,
  IconReturn,
  UserDashboardLabel,
} from "../../../constants";
import {
  useGetSkillsLanguageQuery,
  useGetSkillsListQuery,
} from "../../../redux/services/skillsServices/skillsService";
import "./dashBoard.css";
import { useUserMappedLanguageMutation } from "../../../redux/services/userServices/userService";

export const UserDashboard = () => {
  const [userMappedPayload] = useUserMappedLanguageMutation();
  const { data: skillsListData } = useGetSkillsListQuery();
  const { data: skillsLanguageData } = useGetSkillsLanguageQuery();
  const nav = useNavigate();
  const Logout = () => {
    localStorage.clear();
    nav("/");
  };
  return (
    <>
      <div className="card text-white mt-4 ms-2 me-2 bgColor shadow">
        <div className="card-body">
          <div className="row">
            <div className="col-1">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle "
                alt="Avatar"
                style={{ maxWidth: "80px", maxHeight: "80px" }}
              />
            </div>
            <div className="col-2">
              <p className="p-0 mb-0 fw-lighter">{DashboardLable?.WELCOME}</p>
              <h6>{localStorage.getItem("USERNAME")}</h6>
              <span className="badge bg-white text-dark">
                {localStorage?.getItem("USERTYPE")}
              </span>
            </div>
            <div className="col-8"></div>
            <div className="col-1">
              <button
                className="btn btn-light text-dark mt-3 fw-bolder"
                onClick={() => {
                  Logout();
                }}
              >
                {DashboardLable?.LOGOUT}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        {skillsListData?.data &&
          skillsListData?.data?.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          skillsListData?.data?.map((value: any) => {
            console.log(value, "value from the skillsListData");
            return (
              <>
                <div className="col-md-6 text-white padding-start-0 mt-3">
                  <div className="card-body bgColor rounded shadow">
                    <div className="row">
                      <div className="col-3 text-center p-5">
                        {IconReturn(value?.Language?.languageType)}
                      </div>
                      <div className="col-5 mt-5">
                        <h6>{UserDashboardLabel?.PREPARE}</h6>
                        <label>
                          Language : {value && value?.Language?.languageType}
                        </label>
                      </div>
                      <div className="col-4 text-center p-5 mt-2 ">
                        <button
                          className="btn btn-light"
                          onClick={() => {
                            nav("/user/domain", {
                              state: { id: value?.Language?.languageType },
                            });
                          }}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="mb-5">
        <h5 className="p-3">Prepare By Topics</h5>
        <div className="container">
          <div className="row border rounded ">
            {skillsLanguageData &&
              skillsLanguageData?.data?.length > 0 &&
              skillsLanguageData?.data?.map((value: any) => {
                return (
                  <div
                    className="col-4 border p-2  hover-cell pointer"
                    onClick={() => {
                      // For futre use

                      // Swal.fire({
                      //   title: `Are you sure want to add ${value?.languageType}?`,
                      //   text: "You won't be able to revert this!",
                      //   icon: "warning",
                      //   showCancelButton: true,
                      //   confirmButtonColor: "#3085d6",
                      //   cancelButtonColor: "#d33",
                      //   confirmButtonText: "Yes, delete it!",
                      // }).then((result: any) => {
                      //   if (result.isConfirmed) {
                      //     Swal.fire({
                      //       title: `${value?.languageType}`,
                      //       text: "Language has been added successfully",
                      //       icon: "success",
                      //     });
                      //   }
                      //   });
                      nav("/user/domain", {
                        state: { id: value?.languageType },
                      });
                      userMappedPayload({ id: value?.id });
                    }}
                  >
                    <p className="ms-3 fw-bold mt-2">{value?.languageType}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
