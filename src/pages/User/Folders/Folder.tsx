/* eslint-disable react-refresh/only-export-components */
import { Link, useLocation } from "react-router-dom";
import {
  useCreateFolderMutation,
  useGetAllFolderQuery,
} from "../../../redux/services/filerServices/fileService";
import { Modal } from "../../../components/Modal/Modal";
import CreateFolder from "./CreateFolder";
import React, { useState } from "react"; // Added React for type definitions

type CompilerProps = {
  setFolder?: React.Dispatch<React.SetStateAction<object[]>>;
};

const Folders = ({ setFolder }: CompilerProps) => {
  const location = useLocation();
  const { data } = useGetAllFolderQuery();
  const pathNameCondition = location?.pathname === "/user/folders";
  const [createFolder, setCreateFolder] = useState<object>({ folderName: "" });
  const [userTypePayload] = useCreateFolderMutation();

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-3">
        <h4 className="ms-3">My Folders</h4>
        <Modal
          Title="Create Folder"
          SubmitBtn={"Create Folder"}
          onClick={() => {
            userTypePayload(createFolder);
          }}
          children={
            <CreateFolder
              setCreateFolder={setCreateFolder}
              createFolder={createFolder}
            />
          }
          ModalBtn={"Create Folder"}
        />
      </div>
      <div className="border m-3 rounded">
        {data?.data?.map((value: any, i: number) => {
          // Modified data?.data to data?
          return (
            <div
              className={`border-bottom ps-3`}
              onClick={() => setFolder(value)}
              key={i} // Added key prop for list items
            >
              <div className="p-0">
                <Link
                  to={
                    pathNameCondition
                      ? `/user/folders/${value?.folderName}`
                      : ""
                  }
                  className="text-decoration-none"
                  state={pathNameCondition ? value : null}
                >
                  <h5 className="mt-2"> {value?.folderName}</h5>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Folders;
