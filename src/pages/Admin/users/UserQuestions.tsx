/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form } from "react-bootstrap";
import {
  useGetAllFilesQuery,
  useGetAllLanguagesQuery,
  useGetUserMappedQuestionQuery,
  useQuestionAssignedByMutation,
} from "../../../redux/services/filerServices/fileService";
import { useState } from "react";
interface Ilayout {
  userID: string;
}
const UserQuestions = ({ userID }: Ilayout) => {
  const [selectedLanguage, setSelectedLanguage] = useState("C");
  const { data, refetch } = useGetAllFilesQuery({
    page: 1,
    limit: 10,
    language: selectedLanguage !== "C#" ? selectedLanguage : "C%23",
  });
  const getLanguages = useGetAllLanguagesQuery();
  const getUserMappedQuestion = useGetUserMappedQuestionQuery({
    userId: userID,
  });
  console.log(getUserMappedQuestion);

  const [questionPayload] = useQuestionAssignedByMutation();

  return (
    <>
      <div className="d-flex">
        {getLanguages?.data?.data?.map((language: any) => (
          <Form.Check
            inline
            type="radio"
            checked={language?.languageType === selectedLanguage}
            id="language"
            name="language"
            label={language?.languageType}
            value={language?.languageType}
            onChange={(e) => {
              refetch();
              setSelectedLanguage(e.target.value);
            }}
          />
        ))}
      </div>
      <div className="d-flex mt-3" style={{ border: "2px solid white" }}>
        <h5 className="my-2  pt-4">{selectedLanguage}</h5>
        <span className="d-flex ms-2 w-100 overflow-auto py-4">
          {data?.data?.map((file: any) => (
            <div className="text-center">
              <p className="ms-3 mb-1 text-nowrap">
                <b>{file?.topicName}</b> ({file?.fileName})
              </p>

              <Form.Check
                className="ms-4"
                checked={getUserMappedQuestion?.data?.data?.includes(file?.id)}
                disabled={getUserMappedQuestion?.data?.data?.includes(file?.id)}
                onChange={async (e) => {
                  if (e.target?.checked) {
                    await questionPayload({ questionId: file?.id, userId: userID });
                    getUserMappedQuestion?.refetch();
                  }
                }}
              />
            </div>
          ))}
        </span>
      </div>
    </>
  );
};
export default UserQuestions;
