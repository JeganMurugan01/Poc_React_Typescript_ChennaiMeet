import { useLocation } from "react-router-dom";
import { UserProfileLabel } from "../../constants";
import { useGetUsersByIdQuery } from "../../redux/services/userServices/userService";
import "../Admin/DashBoard/index.css";
export const UserProfile = () => {
  const location = useLocation();
  console.log(location.state.id);
  const { data } = useGetUsersByIdQuery({ id: location.state.id });
  console.log(data, "data from the userProfile");

  return (
    <>
      <h4 className="d-flex justify-content-left mt-3 ms-3 ">
        {UserProfileLabel?.USERDETAILSHEADING}
      </h4>
      <div className=" bgColor text-white m-3 rounded p-4 ">
        <div className="row ms-5 mt-3 mb-3">
          <div className="col-4">
            <div>
              <p className="m-0">{UserProfileLabel?.FIRSTNAME}</p>
              <b>{data && data?.firstName}</b>
              <p className="m-0 mt-3">{UserProfileLabel?.ADDRESS}</p>
              <b>{data && data?.profile?.address}</b>
              <p className="m-0 mt-3">{UserProfileLabel?.STATE}</p>
              <b>{data && data?.profile?.state}</b>
            </div>
          </div>
          <div className="col-4 ">
            <p className="m-0 ">{UserProfileLabel?.LASTNAME}</p>
            <b>{data && data?.lastName}</b>
            <p className="m-0 mt-3">{UserProfileLabel?.PHONENUMBER}</p>
            <b>{data && data?.profile?.phoneNumber}</b>
            <p className="m-0 mt-3">{UserProfileLabel?.ACTIVE}</p>
            <b className="badge bg-white text-dark">
              {data && data?.profile?.status ? "ACTIVE" : "test"}
            </b>
          </div>
          <div className="col-4">
            <p className="m-0 ">{UserProfileLabel?.LASTNAME}</p>
            <b>{data && data?.email}</b>
            <p className="m-0 mt-3">{UserProfileLabel?.PINCODE}</p>
            <b>{data && data?.profile?.pincode}</b>
            <p className="m-0 mt-3">UserType:</p>
            <b>{localStorage?.getItem("USERTYPE")}</b>
          </div>
        </div>
      </div>
    </>
  );
};
