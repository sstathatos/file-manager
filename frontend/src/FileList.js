import React, { useState, useEffect } from 'react';
import axios from "axios";

const baseUrl = "http://localhost:8000/"

const FileList = ({ currentDirectory, onNavigate, onSelect }) => {
  const [files, setFiles] = useState([]);
  const fetchData = async () => {
      const result = await axios.get(`${baseUrl}/files/`);
      setFiles(result.data);
  };

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
            <li key={file.file_id} onClick={() => handleClick(file)}>
              {file.name}
            </li>
          ))}
        </ul>
      ) : (
        <div>
          <p>No files found.</p>
        </div>
      )}
      <div>
        <input type="file" onChange={handleUpload} />
        <button>Upload</button>
      </div>
    </div>
  );
};

export default FileList;