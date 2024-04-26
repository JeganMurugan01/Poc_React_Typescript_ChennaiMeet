/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Table from "../../../components/Table/Table";
import {
  useFileUploadMutation,
  useGetAllFilesQuery,
} from "../../../redux/services/filerServices/fileService";
import { transformData } from "../../../utils/helper";
import { Logout } from "../../../constants";
import { Modal } from "../../../components/Modal/Modal";
import AddFiles from "./AddFiles";

const Files = () => {
  const [file, setFile] = useState();
  const [files, setFiles] = useState({ language: "", level: 0, topicName: "" });
  const [tableData, setTableData] = useState<any>();
  const { data, isSuccess, error } = useGetAllFilesQuery({ page: 1, limit: 5 });
  const [userTypePayload] = useFileUploadMutation();
  if (error) {
    Logout();
  }

  const handleSubmit = () => {
    const data = new FormData();
    data.append("fileToUpload", file);
    data.append("language", files?.language);
    data.append("level", files?.level);
    data.append("topicName", files?.topicName);
    userTypePayload(data);
  };

  useEffect(() => {
    if (isSuccess && data) {
      const orgData = (data as any).data;
      setTableData(transformData(orgData));
    }
  }, [data, isSuccess]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <h4 className="mt-3 ms-3">List of qustions</h4>
        <div className="my-2 me-2">
          <Modal
            children={
              <AddFiles setFile={setFile} files={files} setFiles={setFiles} />
            }
            Title="Add Files"
            SubmitBtn={"Submit"}
            onClick={handleSubmit}
            ModalBtn={"Add Files"}
          />
        </div>
      </div>
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
