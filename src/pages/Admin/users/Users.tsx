/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { transformData } from "../../../utils/helper";
import Table from "../../../components/Table/Table";
import {
  useDeleteUserMutation,
  useGetUsersQuery,
} from "../../../redux/services/userServices/userService";
import { Logout, USERS } from "../../../constants";
import { Modal } from "../../../components/Modal/Modal";
import UserQuestions from "./UserQuestions";

const Users = () => {
  const [tableData, setTableData] = useState<any>();
  const [show, setShow] = useState(false);
  const [user, setUser] = useState("");
  const { data, isSuccess, error } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  if (error) {
    Logout();
  }
  const onGridReady = () => {
    if (isSuccess && data) {
      const orgData = (data as any).data;
      const modifiedData = orgData.map((item: any) => ({
        ...item,
        Action: "",
      }));
      setTableData(transformData(modifiedData));
    }
  };

  const onCellClicked = async (e: any) => {
    if (e?.colDef?.field === "Action") await deleteUser({ id: e?.data?.id });
    else if (e?.colDef?.field === "firstName"&&e?.data?.UserType?.userType!=="ADMIN") {await setShow(true);setUser(e?.data?.id)}
  };

  useEffect(() => {
    onGridReady();
  }, [data, isSuccess]);

  return (
    <>
      <Modal
        children={<UserQuestions userID={user} />}
        show={show}
        setShow={setShow}
        size="modal-lg"
        SubmitBtn={"Assign"}
        Title={"Assign Questions"}
      />
      <h4 className="d-flex justify-content-left mt-3 ms-3">
        {USERS?.ACTIVEUSERS}
      </h4>
      <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12 ">
          <div className="ms-2 me-2">
            <Table
              rowData={tableData?.rowData}
              colDefs={tableData?.colDefs}
              onGridReady={onGridReady}
              onCellClicked={onCellClicked}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
