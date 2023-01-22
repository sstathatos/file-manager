import React from 'react';

const FileActions = ({ file, onDelete }) => {

  return (
    <div>
      <button onClick={() => onDelete(file)}>Delete</button>
      <button>Download</button>
      <button>Share</button>
    </div>
  );
};

export default FileActions;