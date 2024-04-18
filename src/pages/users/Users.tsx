/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { transformData } from "../../utils/helper";
import Table from "../../components/Table/Table";
import { useGetUsersQuery } from "../../redux/services/userServices/userService";
import { Logout, USERS } from "../../constants";

const Users = () => {
  const [tableData, setTableData] = useState<any>();
  const { data, isSuccess, error } = useGetUsersQuery();

  if (error) {
    Logout();
  }

  useEffect(() => {
    if (isSuccess && data) {
      const orgData = (data as any).data;
      console.log(orgData, "orgData");
      const modifiedData = orgData.map((item: any) => ({
        ...item,
        action: "",
      }));
      setTableData(transformData(modifiedData));
    }
  }, [data, isSuccess]);
  console.log(tableData, "tableData");

  return (
    <>
      <h4 className="d-flex justify-content-left mt-3 ms-3">
        {USERS?.ACTIVEUSERS}
      </h4>
      <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12 ">
          <div className="ms-2 me-2">
            <Table rowData={tableData?.rowData} colDefs={tableData?.colDefs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
