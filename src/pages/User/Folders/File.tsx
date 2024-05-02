/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useGetQuestionByIdQuery,
  useGetSavedCodeMutation,
  useSaveProjectCodeMutation,
} from "../../../redux/services/filerServices/fileService";
import { Modal } from "../../../components/Modal/Modal";
import CreateFile from "./CreateFile";
type CompilerProps = {
  folder?: object;
  setFolder?: React.Dispatch<React.SetStateAction<object>>;
  code: string;
  fileId:string
};
const File = ({ folder, setFolder, code ,fileId}: CompilerProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { filename } = useParams();
  const folderCondition = folder?.Project
    ? folder?.Project
    : location?.state?.Project;
  const [questionId, setQuestionId] = useState("");
  const [createFile, setCreateFile] = useState("");
  const [saveCodePost] = useSaveProjectCodeMutation();
  const [questionById,{data}] = useGetSavedCodeMutation();
  const getQuestionById = useGetQuestionByIdQuery(
    { questionId: questionId },
    { skip: questionId === "" ? true : false }
  );
  useEffect(() => {
    if (location?.state?.length) setFolder(location?.state);
  }, []);
  useEffect(() => {
    if (questionId !== "" && getQuestionById?.status !== "pending") {
      navigate("/user/compiler", { state: {question:getQuestionById?.data?.question,fileId:questionId ,code:data?.data?.code}});
    }
  }, [getQuestionById]);
console.log(data);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-3">
        <h4 className="ms-3">{filename} Files</h4>
        <Modal
          Title="Create File"
          SubmitBtn={"Create File"}
          onClick={() => {
            saveCodePost({
              folderId: folder?.id,
              projectName: createFile,
              code: code,
              fileId:fileId
            });
          }}
          btnClassName="float-right"
          children={
            <CreateFile createFile={createFile} setCreateFile={setCreateFile} />
          }
          ModalBtn={"Create File"}
        />
      </div>
      {folderCondition?.map((value: any) => {
        return (
          <div className={`card mt-2 ms-3`}>
            <div className="card-body">
              <div className="row">
                <div className="col-9 ">
                  <div className="p-2">
                    <h5 className="mt-2">{value?.projectName}</h5>
                  </div>
                </div>
                {location?.state ? (
                  <div className="col-3">
                    <button
                      className=" btn btn-success mt-3 w-75 "
                      onClick={async () => {
                        await questionById({ projectId: value?.id }).then(
                          ({data}:any) => {
                            if(data?.data?.fileId!==null)
                            {setQuestionId(data?.data?.fileId);
                            getQuestionById.refetch();}
                          }
                        );                       
                      }}
                    >
                      Open
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default File;
