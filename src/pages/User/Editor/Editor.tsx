import { useEffect, useState } from "react";
import Compiler from "../../../components/Compiler/Compiler";
import { useLocation } from "react-router-dom";

const Editor = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<string>("javascript");
  const [code, setCode] = useState<string>("");
  const [theme, setTheme] = useState<string>("light");
  const [fileId,setFileId]=useState<string>("")
  const handleLanguageChange = (selectedLanguage: string) =>
    setLanguage(selectedLanguage);


  const handleThemeChange = (selectedTheme: string) => setTheme(selectedTheme);

  const handleSubmit = () =>
    // Handle submitting the code
    //for future use
    console.log(code);

useEffect(()=>{
  setFileId(location?.state?.fileId?location?.state.fileId:"")
  setCode(location?.state?.code)
},[])  
  return (
    <div>
      <div className="compiler-container">
        <div className="question-section overflow-auto">
          <h2>Question:</h2>
          <p>Enter your question here:</p>
          <p style={{ whiteSpace: "pre-line" }}>
            {location?.state?.question ? location?.state?.question : ""}
          </p>
        </div>
        <Compiler
          language={language}
          theme={theme}
          setCode={setCode}
          value={code}
          fileId={fileId}
          onLanguageChange={handleLanguageChange}
          onThemeChange={handleThemeChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Editor;
