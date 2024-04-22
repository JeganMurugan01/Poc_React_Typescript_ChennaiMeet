import { useLocation } from "react-router-dom";
import { UserProfileLabel } from "../../constants";
import { useGetUsersByIdQuery } from "../../redux/services/userServices/userService";
import "../Admin/DashBoard/index.css";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
export const UserProfile = () => {
  const [edit, setEdit] = useState<boolean>(false);
  const [userType, setUserType] = useState<string>("");
  const location = useLocation();
  const { data } = useGetUsersByIdQuery({ id: location.state.id });
  const [isUserCheckboxDisabled, setIsUserCheckboxDisabled] =
    useState<boolean>(false);
  const [isCoAdminCheckboxDisabled, setIsCoAdminCheckboxDisabled] =
    useState<boolean>(false);

  const handleCheckboxChange = (checkedType: string) => {
    if (checkedType === "USER") {
      setIsCoAdminCheckboxDisabled(true);
      setIsUserCheckboxDisabled(false);
      setUserType("USER");
    } else {
      setIsUserCheckboxDisabled(true);
      setIsCoAdminCheckboxDisabled(false);
      setUserType("COADMIN");
    }
  };
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
            <p className="m-0 mt-3">UserType :</p>
            {edit === false ? <b>{data && data?.UserType?.userType}</b> : ""}
            {edit === false ? (
              <>
                <FaEdit
                  className="ms-2 mb-1"
                  style={{ cursor: "pointer" }}
                  onClick={() => setEdit(true)}
                />
              </>
            ) : (
              <>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="USER"
                  value="USER"
                  checked={userType === "USER"}
                  onChange={() => handleCheckboxChange("USER")}
                  disabled={isUserCheckboxDisabled}
                />
                <label className="form-check-label ms-2">User</label>
                <input
                  className="form-check-input ms-5"
                  type="checkbox"
                  id="COADMIN"
                  value="COADMIN"
                  checked={userType === "COADMIN"}
                  onChange={() => handleCheckboxChange("COADMIN")}
                  disabled={isCoAdminCheckboxDisabled}
                />
                <label className="form-check-label ms-2">Co-Admin</label>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
