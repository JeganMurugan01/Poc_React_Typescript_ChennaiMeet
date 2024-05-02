type CompilerProps = {
  createFolder?: object[];
  setCreateFolder?: React.Dispatch<React.SetStateAction<object | undefined>>;
};
const CreateFolder = ({ createFolder, setCreateFolder }: CompilerProps) => {
  return (
    <>
      <input
        value={createFolder?.name}
        name="folderName"
        onChange={(e) =>
          setCreateFolder({ ...createFolder, [e.target.name]: e.target.value })
        }
      />
    </>
  );
};

export default CreateFolder;
