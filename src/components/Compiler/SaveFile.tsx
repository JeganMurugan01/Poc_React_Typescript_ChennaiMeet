import { useState } from "react";
import Folders from "../../pages/User/Folders/Folder";
import File from "../../pages/User/Folders/File";

type SaveFileProps = {
  value?: string;
  fileId?:string
};

const SaveFile = ({ value ,fileId}: SaveFileProps) => {
  const [folder, setFolder] = useState<object[]>(); // Initialized with an empty array
console.log(fileId);

  return (
    <>
      {folder ? <File folder={folder} setFolder={setFolder} code={value} fileId={fileId}/> : <Folders setFolder={setFolder} />}
    </>
  );
};

export default SaveFile;

