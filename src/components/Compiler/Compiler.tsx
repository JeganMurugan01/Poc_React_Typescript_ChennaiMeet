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
  onLanguageChange: (language: string) => void;
  onThemeChange: (theme: string) => void;
  onSubmit: () => void;
};
const Compiler = ({
  language,
  theme,
  value,
  onLanguageChange,
  onThemeChange,
  onSubmit,
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

  const editorHeight = `calc(80vh - 90px)`;

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
        theme={theme}
        defaultValue="// Enter your code here"
        className="editor"
      />
      <div className="d-flex flex-row-reverse mt-2 ">
        <button onClick={handleRun} className="btn btn-primary">
          {LOGIN?.SUBMIT}
        </button>
        <button onClick={handleSubmit} className="btn btn-primary">
          {LOGIN?.RUN}
        </button>
      </div>
      <Modal
        children={<SaveFile value={value}/>}
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
