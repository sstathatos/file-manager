import React, { useEffect, useState } from 'react';
import FileActions from './FileActions';

const FilePreview = ({ file, onDelete, setSelectedFile }) => {
  const [previewUrl, setPreviewUrl] = useState(null);

  return (
    <div>
      <div>
        <img src={`http://localhost:8000/media/${file.name}`} alt={file.name} />
        <p>{file.name}</p>
      </div>
      <div className='file-actions'>{<FileActions file={file} onDelete={onDelete} />}</div>
    </div>
  );
};

export default FilePreview;
