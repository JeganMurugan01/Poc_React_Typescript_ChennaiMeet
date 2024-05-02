import { useState } from "react";
import Compiler from "../../../components/Compiler/Compiler";
import { useLocation } from "react-router-dom";

const Editor = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<string>("javascript");
  const [code, setCode] = useState<string>("");
  const [theme, setTheme] = useState<string>("light");
  const handleLanguageChange = (selectedLanguage: string) =>
    setLanguage(selectedLanguage);

  const handleThemeChange = (selectedTheme: string) => setTheme(selectedTheme);

  const handleSubmit = () =>
    // Handle submitting the code
    //for future use
    setCode("Test");

  return (
    <div>
      <div className="compiler-container">
        <div className="question-section overflow-auto">
          <h2>Question:</h2>
          <p>Enter your question here:</p>
          <p style={{ whiteSpace: "pre-line" }}>
            {location?.state ? location?.state : ""}
          </p>
        </div>
        <Compiler
          language={language}
          theme={theme}
          value={code}
          onLanguageChange={handleLanguageChange}
          onThemeChange={handleThemeChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Editor;
