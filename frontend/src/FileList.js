import React, { useState, useEffect } from 'react';
import axios from "axios";
import './FileList.css';
import { FiFile, FiFolder, FiImage } from 'react-icons/fi';


const baseUrl = "http://localhost:8000/"

const FileList = ({ files, currentDirectory, onNavigate, onSelect , fetchData}) => {

  // useEffect(() => {
  //   fetchData();
  // }, [files]);

  const handleClick = (file) => {
    if (file.isDirectory) {
      onNavigate(file.path);
    } else {
      onSelect(file);
    }
  };

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    await axios.post(`${baseUrl}/files/`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    // refresh file list after upload
    fetchData();
  };

  return (
    <div>
      {files.length > 0 ? (
        <ul>
          {files.map((file) => (
            <li key={file.file_id} className="file-item" onClick={() => handleClick(file)}>
              {file.type === 'jpg' || file.type === 'png' ?
                        <FiImage className="file-icon" size={32} /> :
                    file.type === 'folder' ?
                        <FiFolder className="file-icon" size={32} /> :
                        <FiFile className="file-icon" size={32} /> }
              {file.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No files found.</p>
        </div>
      )}
      <div className="input-container">
        <input type="file" onChange={handleUpload} />
        <button>Upload</button>
      </div>
    </div>
  );
};

export default FileList;