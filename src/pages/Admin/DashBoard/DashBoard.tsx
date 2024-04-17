import { PiFilesFill } from "react-icons/pi";
import { AdminDashboardLable } from "../../../constants";
import "./index.css";
import { IoMdDocument } from "react-icons/io";
import { IoDocumentText } from "react-icons/io5";
import { HiDocumentText } from "react-icons/hi";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

export const AdminDashBoard = () => {
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
              <p className="p-0 mb-0 fw-lighter">
                {AdminDashboardLable?.WELCOME}
              </p>
              <h6>{localStorage.getItem("USERNAME")}</h6>
              <span className="badge bg-white text-dark">
                {localStorage?.getItem("USERTYPE")}
              </span>
            </div>
            <div className="col-8"></div>
            <div className="col-1">
              <button className="btn btn-light text-dark mt-3">
                {AdminDashboardLable?.LOGOUT}
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
                <label>Count : 9</label>
              </div>
              <div className="col mt-5 p-2">
                <FaAnglesUp size={20} /> 25%
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
                <label>Count : 9</label>
              </div>
              <div className="col mt-5 p-2">
                <FaAnglesDown size={20} /> 25%
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
                <label>Count : 9</label>
              </div>
              <div className="col mt-5 p-2">
                <FaAnglesDown size={20} /> 25%
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
                <label>Count : 9</label>
              </div>
              <div className="col mt-5 p-2">
                <FaAnglesUp size={20} /> 25%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
