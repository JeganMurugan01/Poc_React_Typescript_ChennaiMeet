/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useGetAllFilesQuery,
  useGetQuestionByIdQuery,
} from "../../../redux/services/filerServices/fileService";
import { codeLevel } from "../../../constants";
import { useEffect, useState } from "react";

export const Domain = () => {
  const location = useLocation();
  const nav = useNavigate();
  const [questionId, setQuestionId] = useState("");

  const { data } = useGetAllFilesQuery({
    page: 1,
    limit: 50,
    language: location?.state?.id === "C#" ? "C%23" : location?.state?.id,
  });
  const questionById = useGetQuestionByIdQuery(
    {
      questionId: questionId,
    },
    { skip: questionId === "" ? true : false }
  );

  useEffect(() => {
    if (questionId !== "" && questionById?.status !== "pending") {
      nav("/user/compiler", { state: questionById?.data?.question });
    }
  }, [questionById]);
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div className="row border-bottom px-0">
          <div className="col-6">
            <div className="d-flex">
              <FaArrowLeft
                size={20}
                className="mt-3 ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  nav("/user/dashboard");
                }}
              />
              <p
                style={{ marginTop: "9px", fontSize: "23px" }}
                className="ms-3"
              >
                {location?.state?.id}
              </p>
            </div>
          </div>
          <div className="col-6 px-0"></div>
        </div>
        <div style={{ backgroundColor: "#f7f8fd", height: "100%" }}>
          <div className="row">
            <div
              className={
                data?.data?.length
                  ? "col-9"
                  : "col-12 d-flex justify-content-center align-items-center"
              }
            >
              {data?.data?.length ? (
                data?.data.map((value: any, i: number) => (
                  <div
                    className={`card ${i === 0 && "mt-5"} mt-2 ms-3`}
                    key={i}
                  >
                    <div className="card-body">
                      <div className="row">
                        <div
                          className={data?.data?.length ? "col-9" : "col-12"}
                        >
                          <div className="p-2">
                            <h5 className="mt-2">{value?.topicName}</h5>
                            <div style={{ fontSize: "12px" }}>
                              {codeLevel(value?.level)}{" "}
                              <b>{location?.state?.id}</b>
                            </div>
                          </div>
                        </div>
                        <div
                          className={data?.data?.length ? "col-3" : "d-none"}
                        >
                          <button
                            className="btn btn-success mt-3 w-75"
                            onClick={() => {
                              setQuestionId(value?.id);
                              questionById?.refetch();
                            }}
                          >
                            Solve
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ minHeight: "50vh" }}
                >
                  <div>No questions available</div>
                </div>
              )}
            </div>
            <div className={data?.data?.length ? "col-3" : "d-none"}></div>
          </div>
        </div>
      </div>
    </>
  );
};
