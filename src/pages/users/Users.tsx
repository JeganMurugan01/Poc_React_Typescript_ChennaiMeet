/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from "react";
import { transformData } from "../../utils/helper";
import { GridReadyEvent } from "ag-grid-community";
import Table from "../../components/Table/Table";
import { useGetUsersQuery } from "../../redux/services/userServices/userService";
import { USERS } from "../../constants";
import { FaTrash } from "react-icons/fa6";


const Users = () => {
  const [tableData, setTableData] = useState<any>();
  const { data, isSuccess } = useGetUsersQuery();
  console.log(data, "data");
  useEffect(() => {
    if (isSuccess && data) {
      const orgData = (data as any).data;
      console.log(orgData, "orgData");

      const modifiedData = orgData.map((item: any) => ({
        ...item,
        action: <FaTrash/>,
      }));
      setTableData(transformData(modifiedData));
    }
  }, [data, isSuccess]);
  console.log(tableData, "tableData");

  const onCellClicked = useCallback((e: GridReadyEvent) => {
    console.log(e, "Cell was clicked");
  }, []);

  return (
    <>
      <div className="mt-5">
        <div className="row" style={{ marginRight: "0px" }}>
          <div className="ms-5 col-5" style={{ fontWeight: "bold" }}>
            {USERS?.ACTIVEUSERS}
          </div>
          <div className="col-3"></div>
          <button className="btn btn-primary col-1">{USERS?.ADDUSER}</button>
          <div className="col-3"></div>
        </div>
        <div className=" row mt-3">
          <div className="col-9 ms-5">
            <Table
              rowData={tableData?.rowData}
              colDefs={tableData?.colDefs}
              onCellClicked={onCellClicked}
            />
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default Users;
