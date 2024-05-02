import { useState } from "react";
import Folders from "../../pages/User/Folders/Folder";
import File from "../../pages/User/Folders/File";

const SaveFile = () => {
    const [folder,setFolder]=useState<object[]>();
  return (
    <>
     {folder?<File folder={folder} setFolder={setFolder}/>: <Folders setFolder={setFolder}/>}
    </>
  );
};
export default SaveFile;
