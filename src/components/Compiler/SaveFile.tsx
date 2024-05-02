import { useState } from "react";
import Folders from "../../pages/User/Folders/Folder";
import File from "../../pages/User/Folders/File";

type SaveFileProps = {
  value?: string;
};

const SaveFile = ({ value }: SaveFileProps) => {
  const [folder, setFolder] = useState<object[]>(); // Initialized with an empty array

  return (
    <>
      {folder ? <File folder={folder} setFolder={setFolder} code={value} /> : <Folders setFolder={setFolder} />}
    </>
  );
};

export default SaveFile;

