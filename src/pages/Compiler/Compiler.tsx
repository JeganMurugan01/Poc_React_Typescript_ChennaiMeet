import React from "react";
import { Editor } from "@monaco-editor/react";
import { Language, LOGIN, themColor } from "../../constants";
import "./compiler.css";
interface ICompiler {
  language: string;
  theme: string;
  value: string;
  onLanguageChange: (language: string) => void;
  onThemeChange: (theme: string) => void;
  onSubmit: () => void;
}

const Compiler: React.FC<ICompiler> = ({
  language,
  theme,
  value,
  onLanguageChange,
  onThemeChange,
  onSubmit,
}) => {
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onLanguageChange(e.target.value);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onThemeChange(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="compiler-container">
      <div className="question-section">
        <h3>Question:</h3>
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
          height="50vh"
          width="100%"
          language={language || "javascript"}
          value={value}
          theme={theme}
          defaultValue="// Enter your code here"
          className="editor"
        />
      </div>
      <div className="footer">
        <button onClick={handleSubmit} className="btn btn-primary">
          {LOGIN?.RUN}
        </button>
      </div>
    </div>
  );
};

export default Compiler;
