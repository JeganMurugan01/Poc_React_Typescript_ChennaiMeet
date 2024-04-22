/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Table from "../../../components/Table/Table";
import { useGetAllFilesQuery } from "../../../redux/services/filerServices/fileService";
import { transformData } from "../../../utils/helper";
import { Logout } from "../../../constants";

const Files = () => {
  const [tableData, setTableData] = useState<any>();
  const { data, isSuccess, error } = useGetAllFilesQuery({ page: 1, limit: 5 });
  if (error) {
    Logout();
  }
  console.log(data, "data");
  useEffect(() => {
    if (isSuccess && data) {
      const orgData = (data as any).data;
      setTableData(transformData(orgData));
    }
  }, [data, isSuccess]);

  return (
    <>
      <h4 className="d-flex justify-content-left mt-3 ms-3">
        List of qustions
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
export default Files;
