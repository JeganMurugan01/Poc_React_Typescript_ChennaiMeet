import { Form } from "react-bootstrap";
import { useGetAllLanguagesQuery } from "../../../redux/services/filerServices/fileService";
import { DifficultyLevel } from "../../../constants";
interface Ilayout {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setFile: React.Dispatch<React.SetStateAction<any>>;
  setFiles: React.Dispatch<React.SetStateAction<object>>;
  files: object;
}
const AddFiles = ({ setFile, setFiles, files }: Ilayout) => {
  const { data } = useGetAllLanguagesQuery();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: any) => {
    setFiles({ ...files, [e.target.name]: e.target.value });
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFileUpload = (event: any) => {
    const selectedFile = event?.target?.files[0];
    setFile(selectedFile);
  };

  return (
    <>
      <Form.Label className="mb-2" style={{ float: "left" }}>
        Language
      </Form.Label>
      <Form.Select onChange={handleChange} name="language">
        {data?.data?.map((value) => (
          <>
            <option hidden>Select a language</option>
            <option value={value?.languageType} className="text-capitalize">
              {value?.languageType}
            </option>
          </>
        ))}
      </Form.Select>
      <Form.Label className="mb-2" style={{ float: "left" }}>
        Level
      </Form.Label>
      <Form.Select name="level" onChange={handleChange}>
        {DifficultyLevel?.map((value) => (
          <>
            <option hidden>Select a level</option>
            <option value={value?.value} className="text-capitalize">
              {value?.label}
            </option>
          </>
        ))}
      </Form.Select>
      <Form.Label className="mb-2" style={{ float: "left" }}>
        Topic Name
      </Form.Label>
      <Form.Control
        type="text"
        name={"topicName"}
        placeholder="Enter Topic name"
        onChange={handleChange}
      />
      <input type="file" accept=".txt" onChange={handleFileUpload} />
    </>
  );
};

export default AddFiles;
