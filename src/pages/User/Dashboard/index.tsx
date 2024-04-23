import { useNavigate } from "react-router-dom";
import {
  DashboardLable,
  IconReturn,
  UserDashboardLabel,
} from "../../../constants";
import { useGetSkillsListQuery } from "../../../redux/services/skillsServices/skillsService";

export const UserDashboard = () => {
  const { data } = useGetSkillsListQuery();
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
        {data?.data &&
          data?.data?.length > 0 &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data?.data?.map((value: any) => {
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
                        <button className="btn btn-light">Continue</button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};
