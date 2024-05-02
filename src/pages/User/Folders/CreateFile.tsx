type CompilerProps = {
    createFile?: string;
    setCreateFile?: React.Dispatch<React.SetStateAction<string>>;
  };
  const CreateFile = ({ createFile, setCreateFile }: CompilerProps) => {
    return (
      <>
      <label>Project Name</label>
        <input
          value={createFile}
          name="folderName"
          className="form-control ms-2 mt-2"
          onChange={(e) =>
            setCreateFile(e.target.value)
          }
        />
      </>
    );
  };
  
  export default CreateFile;
  