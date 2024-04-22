import { PiFilesFill } from "react-icons/pi";
import { DashboardLable } from "../../../constants";
import "./index.css";
import { IoMdDocument } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { useGetFileMetaDataQuery } from "../../../redux/services/filerServices/fileService";
import { useNavigate } from "react-router-dom";

export const AdminDashBoard = () => {
  const { data } = useGetFileMetaDataQuery();
  const nav = useNavigate();
  console.log(data, "data");
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
                onClick={Logout}
              >
                {DashboardLable?.LOGOUT}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-md-6 text-white padding-start-0 mt-3">
          <div className="card-body bgColor rounded shadow">
            <div className="row">
              <div className="col-3 text-center p-5">
                <IoMdDocument size={50} />
              </div>
              <div className="col-6 mt-5">
                <h6>Total Files</h6>
                <label>Count : {data && data?.total}</label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-white padding-start-0 mt-3">
          <div className="card-body bgColor rounded shadow">
            <div className="row">
              <div className="col-3 text-center p-5">
                <IoDocumentText size={50} />
              </div>
              <div className="col-6 mt-5">
                <h6>Today Files</h6>
                <label>Count : {data && data?.today}</label>
              </div>
              <div className="col mt-5 p-2">
                {data && data?.gainToday ? (
                  <>
                    <FaAnglesUp size={20} /> {data && data?.fileDifferenceToday}
                  </>
                ) : (
                  <>
                    <FaAnglesDown size={20} className="me-2" />
                    {data && data?.fileDifferenceToday}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-2">
        <div className="col-md-6 text-white padding-start-0 mt-3">
          <div className="card-body bgColor rounded shadow">
            <div className="row">
              <div className="col-3 text-center p-5">
                <PiFilesFill size={50} />
              </div>
              <div className="col-6 mt-5">
                <h6>This Week Files</h6>
                <label>Count : {data && data?.week}</label>
              </div>
              <div className="col mt-5 p-2">
                {data && data?.gainThisWeek ? (
                  <>
                    <FaAnglesUp size={20} />{" "}
                    {data && data?.fileDifferenceThisWeek}
                  </>
                ) : (
                  <>
                    <FaAnglesDown size={20} className="me-2" />
                    {data && data?.fileDifferenceThisWeek}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 text-white padding-start-0 mt-3">
          <div className="card-body bgColor rounded shadow">
            <div className="row">
              <div className="col-3 text-center p-5">
                <HiDocumentText size={50} />
              </div>
              <div className="col-6 mt-5">
                <h6>This Month Files</h6>
                <label>Count : {data && data?.month}</label>
              </div>
              <div className="col mt-5 p-2">
                {data && data?.gainThisMonth ? (
                  <>
                    <FaAnglesUp size={20} />{" "}
                    {data && data?.fileDifferenceThisMonth}
                  </>
                ) : (
                  <>
                    <FaAnglesDown size={20} className="me-2" />
                    {data && data?.fileDifferenceThisMonth}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
