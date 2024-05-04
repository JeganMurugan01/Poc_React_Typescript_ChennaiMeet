/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { codeLevel } from "../../../constants";
import { useGetUserQuestionQuery } from "../../../redux/services/filerServices/fileService";

const Questions = () => {
  const { data } = useGetUserQuestionQuery();
  const navigate = useNavigate();
  return (
    <>
      {data?.data.map((value: any, i: number) => {
        return (
          <div className={`card ${i === 0 && "mt-5"} mt-2 ms-3`}>
            <div className="card-body">
              <div className="row">
                <div className="col-9 ">
                  <div className="p-2">
                    <h5 className="mt-2  "> {value?.File?.topicName}</h5>
                    <div className="" style={{ fontSize: "12px" }}>
                      {codeLevel(value?.File?.level)}{" "}
                      <b>{value?.File?.language}</b>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <button
                    className=" btn btn-success mt-3 w-75 "
                    onClick={() =>
                      navigate("/user/compiler", {
                        state: {
                          question: value?.File?.question,
                          fileId: value?.fileId,
                        },
                      })
                    }
                  >
                    {value?.status === "Pending" ? "Open" : value?.status}
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Questions;
