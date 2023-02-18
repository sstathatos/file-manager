import React from 'react';
import './FileList.css';
import { FiFile, FiFolder, FiImage } from 'react-icons/fi';
import PropTypes from 'prop-types';

const FileList = ({ files, onNavigate, onSelect }) => {
  const handleClick = (file) => {
    if (file.isDirectory) {
      onNavigate(file.path);
    } else {
      onSelect(file);
    }
  };

  return (
    <div className='file-list'>
      {files.length > 0 ? (
        <ul>
          {files.map((file) => (
            <li key={file.file_id} className='file-item' onClick={() => handleClick(file)}>
              {file.type === 'jpg' || file.type === 'png' ? (
                <FiImage className='file-icon' size={32} />
              ) : file.type === 'folder' ? (
                <FiFolder className='file-icon' size={32} />
              ) : (
                <FiFile className='file-icon' size={32} />
              )}
              {file.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No files found.</p>
        </div>
      )}
    </div>
  );
};

FileList.propTypes = {
  files: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
};

export default FileList;
