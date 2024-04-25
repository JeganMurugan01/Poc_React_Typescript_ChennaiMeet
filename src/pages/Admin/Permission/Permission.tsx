/* eslint-disable @typescript-eslint/no-explicit-any */
import { Logout, PermissionLabel } from "../../../constants";
import { transformData } from "../../../utils/helper";
import Table from "../../../components/Table/Table";
import { useGetUsersQuery } from "../../../redux/services/userServices/userService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Permission = () => {
  const [tableData, setTableData] = useState<any>();
  const { data, isSuccess, error } = useGetUsersQuery();
  const nav = useNavigate();
  if (error) {
    Logout();
  }
  useEffect(() => {
    if (isSuccess && data) {
      const orgData = (data as any).data;
      const modifiedData = orgData.map((item: any) => ({
        ...item,
        edit: "",
      }));
      setTableData(transformData(modifiedData));
    }
  }, [data, isSuccess]);

  const onCellClicked = (e: any) => {
    if (e?.colDef?.field === "edit") {
      nav("/admin/userDetails", { state: { id: e?.data?.id } });
    }
  };
  return (
    <>
      <h4 className="d-flex justify-content-left mt-3 ms-3">
        {PermissionLabel?.USERPERMISSION}
      </h4>
      <div className="row">
        <div className="col-md-12 col-lg-12 col-sm-12 ">
          <div className="ms-2 me-2">
            <Table
              rowData={tableData?.rowData}
              colDefs={tableData?.colDefs}
              onCellClicked={onCellClicked}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Permission;
