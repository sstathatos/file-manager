import React from 'react';
import FileActions from './FileActions';
import PropTypes from 'prop-types';

const FilePreview = ({ file, onDelete }) => {
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

FilePreview.propTypes = {
  file: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default FilePreview;
