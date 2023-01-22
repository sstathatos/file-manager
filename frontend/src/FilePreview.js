import React, {useEffect} from 'react';
import FileActions from "./FileActions";

const FilePreview = ({ file, onDelete, setSelectedFile }) => {

  // useEffect(() => {
  //   file ? console.log('FilePreview use effect called!') : setSelectedFile(null)
  // }, [file]);

  return (
    <div>
      <div>
        <img src={file.path} alt={file.name} />
        <p>{file.name}</p>
      </div>
      <div className="file-actions">
        {<FileActions file={file} onDelete={onDelete} />}
      </div>
    </div>
  );
};

export default FilePreview;