import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Language, LOGIN, themColor } from "../../constants";
import "./compiler.css";
import SaveFile from "./SaveFile";
import { Modal } from "../Modal/Modal";
type CompilerProps = {
  language: string;
  theme: string;
  value: string;
  setCode?: React.Dispatch<React.SetStateAction<string>>;
  onLanguageChange: (language: string) => void;
  onThemeChange: (theme: string) => void;
  onSubmit: () => void;
  fileId:string
};
const Compiler = ({
  language,
  theme,
  value,
  onLanguageChange,
  onThemeChange,
  fileId,
  onSubmit,
  setCode
}: CompilerProps) => {
  const [show, setShow] = useState<boolean>(false);
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(e.target.value);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onThemeChange(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const handleRun = () => {
    setShow(true);
  };
const handleEditorChange=(value: string)=>{
  setCode(value)
}
  const editorHeight = `calc(80vh - 90px)`;
console.log(fileId);

  return (
    <div className="editor-section">
      <div className="controls">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="form-select"
        >
          {Language?.map((value, i) => (
            <option value={value?.label} key={i}>
              {value?.label}
            </option>
          ))}
        </select>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="form-select"
        >
          {themColor &&
            themColor?.map((value, i) => (
              <option value={value?.them} key={i}>
                {value?.them}
              </option>
            ))}
        </select>
      </div>
      <Editor
        height={editorHeight}
        width="100%"
        language={language || "javascript"}
        value={value}
        onChange={handleEditorChange}
        theme={theme}
        defaultValue="// Enter your code here"
        className="editor"
      />
      <button onClick={handleSubmit} className="btn btn-success">
          {LOGIN?.RUN}
        </button>
      <div className="d-flex justify-content-between mt-2 ">
        <button onClick={handleRun} className="btn btn-primary">
          Save File
        </button>        
      </div>
      <Modal
        children={<SaveFile value={value} fileId={fileId}/>}
        show={show}
        setShow={setShow}
        Title="Save File"
        SubmitBtn={"Submit"}
        onClick={handleSubmit}
      />
    </div>
  );
};
export default Compiler;
