/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { transformData } from "../../utils/helper";
import Table from "../../components/Table/Table";
import { useGetUsersQuery } from "../../redux/services/userServices/userService";
import { USERS } from "../../constants";
// import { FaTrash } from "react-icons/fa6";

const Users = () => {
  const [tableData, setTableData] = useState<any>();
  const { data, isSuccess } = useGetUsersQuery();
  console.log(data, "data");
  useEffect(() => {
    if (isSuccess && data) {
      const orgData = (data as any).data;
      console.log(orgData, "orgData");
      // for future use
      // const modifiedData = orgData.map((item: any) => ({
      //   ...item,
      //   action: `${(<i className="material-icons">delete</i>)}`,
      // }));
      setTableData(transformData(orgData));
    }
  }, [data, isSuccess]);
  console.log(tableData, "tableData");

  // const onCellClicked = useCallback((e: GridReadyEvent) => {
  //   console.log(e, "Cell was clicked");
  // }, []);

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
