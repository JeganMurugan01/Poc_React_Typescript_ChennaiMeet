import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useGetSavedCodeQuery } from "../../../redux/services/filerServices/fileService";
type CompilerProps = {
  folder?: object[];
  setFolder?: React.Dispatch<React.SetStateAction<object[] | undefined>>;
};
const File = ({ folder, setFolder }: CompilerProps) => {
  const location = useLocation();
  //   const navigate = useNavigate();
  const [projectId, setProjectId] = useState("");
  // const questionById = useGetSavedCodeQuery(
  //   {
  //     projectId: projectId,
  //   },
  //   { skip: projectId === "" ? true : false }
  // );

  useEffect(() => {
    if (location?.state?.length) setFolder(location?.state);
  }, []);
  console.log(folder,location?.state);
  
  return (
    <>
      {folder?.map((value: any, i: number) => {
        return (
          <div className={`card ${i === 0 && "mt-5"} mt-2 ms-3`}>
            <div className="card-body">
              <div className="row">
                <div className="col-9 ">
                  <div className="p-2">
                    <h5 className="mt-2">{value?.projectName}</h5>
                  </div>
                </div>
                {location?.state?<div className="col-3">
                  <button
                    className=" btn btn-success mt-3 w-75 "
                    onClick={() => {
                      setProjectId(value?.id);
                      console.log(value);
                      //     navigate("/user/compiler", {
                      //     state: value?.File?.question,
                      //   })
                    }}
                  >
                    Solves
                  </button>
                </div>:<></>}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default File;
