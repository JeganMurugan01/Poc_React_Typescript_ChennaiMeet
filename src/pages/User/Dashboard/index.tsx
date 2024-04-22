import { useNavigate } from "react-router-dom";
import { DashboardLable } from "../../../constants";

export const UserDashboard = () => {
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
    </>
  );
};
