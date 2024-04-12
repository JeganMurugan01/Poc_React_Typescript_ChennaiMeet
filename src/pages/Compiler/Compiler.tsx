import React from "react";
import { Editor } from "@monaco-editor/react";
import { COMPILER, Language, LOGIN, themColor } from "../../constants";
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
  console.log(language, "language");
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log(e, "language");

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
      <div className="row">
        <div className="col-sm-6 question-container">
          <h4>{COMPILER?.HEADING}</h4>
          <div className="question">
            <p>Question:</p>
          </div>
        </div>
        <div className="col-sm-6 editor-container">
          <div className="row">
            <div className="col-4">
              <select
                value={language}
                onChange={handleLanguageChange}
                className="form-select"
              >
                {Language?.map((value, i) => {
                  return (
                    <option value={value?.label} key={i}>
                      {value?.label}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-4"></div>
            <div className="col-4">
              <select
                value={theme}
                onChange={handleThemeChange}
                className="form-select"
              >
                {themColor &&
                  themColor?.map((value, i) => {
                    return (
                      <>
                        <option value={value?.them} key={i}>
                          {value?.them}
                        </option>
                      </>
                    );
                  })}
              </select>
            </div>
          </div>
          <Editor
            height="85vh"
            width="100%"
            language={language || "javascript"}
            value={value}
            theme={theme}
            defaultValue="// some comment"
            className="mt-2"
          />
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-outline-secondary mt-3">
                Secondary
              </button>
            </div>
            {/* <div className="col-4"></div> */}
            <div className="col-6">
              <button
                onClick={handleSubmit}
                className="btn btn-primary mt-3 me-3"
              >
                {LOGIN?.RUN}
              </button>
              <button onClick={handleSubmit} className="btn btn-primary mt-3">
                {LOGIN?.SUBMIT}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compiler;
