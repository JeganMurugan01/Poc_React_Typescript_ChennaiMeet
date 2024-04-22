import React from "react";
import { Editor } from "@monaco-editor/react";
import { Language, LOGIN, themColor } from "../../constants";
import "./compiler.css";
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
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(e.target.value);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onThemeChange(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  const editorHeight = `calc(80vh - 90px)`;

  return (
    <>
      <div>
        <div className="compiler-container">
          <div className="question-section">
            <h2>Question:</h2>
            <p>Enter your question here:</p>
          </div>
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
              <button onClick={handleSubmit} className="btn btn-primary">
                {LOGIN?.RUN}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Compiler;
