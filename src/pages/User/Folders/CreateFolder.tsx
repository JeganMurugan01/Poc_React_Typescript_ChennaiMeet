type CompilerProps = {
  createFolder?: object;
  setCreateFolder?: React.Dispatch<React.SetStateAction<object>>;
};
const CreateFolder = ({ createFolder, setCreateFolder }: CompilerProps) => {
  return (
    <>
      <label>Folder Name</label>
      <input
        value={createFolder?.folderName}
        className="form-control ms-2 mt-2"
        name="folderName"
        onChange={(e) =>
          setCreateFolder({ ...createFolder, [e.target.name]: e.target.value })
        }
      />
    </>
  );
};

export default CreateFolder;
