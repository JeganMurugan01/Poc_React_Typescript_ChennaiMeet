/* eslint-disable react-refresh/only-export-components */
import { Link, useLocation } from "react-router-dom";
import { useCreateFolderMutation, useGetAllFolderQuery } from "../../../redux/services/filerServices/fileService";
import { Modal } from "../../../components/Modal/Modal";
import CreateFolder from "./CreateFolder";
import { useState } from "react";
type CompilerProps = {
  setFolder?: React.Dispatch<React.SetStateAction<object[] | undefined>>;
};
const Folders = ({ setFolder }: CompilerProps) => {
  const location = useLocation();
  const { data } = useGetAllFolderQuery();
  const pathNameCondition = location?.pathname === "/user/folders";
  const [createFolder,setCreateFolder]=useState<object>({folderName:""});
  const [userTypePayload,userTypeData]=useCreateFolderMutation();
  
  return (
    <>
      <Modal
        Title="Create Folder"
        SubmitBtn={"Create Folder"}
        onClick={()=>{userTypePayload(createFolder);}}
        btnClassName="float-right"
        children={<CreateFolder setCreateFolder={setCreateFolder} createFolder={createFolder}/>}
        ModalBtn={"Create Folder"}
      />
      {data?.data.map((value: any, i: number) => {
        return (
          <div
            className={`card ${i === 0 && "mt-5"} mt-2 ms-3`}
            onClick={() => setFolder(value?.Project)}
          >
            <div className="card-body p-0">
              <Link
                to={
                  pathNameCondition ? `/user/folders/${value?.folderName}` : ""
                }
                state={pathNameCondition ? value?.Project : null}
              >
                <h5 className="mt-2"> {value?.folderName}</h5>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Folders;
