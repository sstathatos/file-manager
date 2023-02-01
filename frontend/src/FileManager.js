import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FileManager.css";
import FileList from "./FileList";
import FilePreview from "./FilePreview";

const baseUrl = "http://localhost:8000/";

const FileManager = () => {
  const [currentDirectory, setCurrentDirectory] = useState("/");
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchData = async () => {
    const result = await axios.get(`${baseUrl}files/`);
    console.log(result.data);
    setFiles(result.data);
  };

  useEffect(() => {
    fetchData();
  }, [currentDirectory]);

  const handleNavigate = (path) => {
    setCurrentDirectory(path);
  };

  const handleSelectFile = (file) => {
    selectedFile === file ? setSelectedFile(null) : setSelectedFile(file);
  };

  // const handleUploadFile = (e) => {
  //   const formData = new FormData();
  //   formData.append('file', e.tarcurrentDirectoryget.files[0]);
  //   axios.post(`${baseUrl}files/`, formData, {
  //     headers: { 'Content-Type': 'multipart/form-data' },
  //   });
  // };

  const handleUpload = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    await axios.post(`${baseUrl}/files/`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // refresh file list after upload
    fetchData();
  };

  const handleDeleteFile = async (file) => {
    await axios.delete(`${baseUrl}files/${file.file_id}`);
    const result = await axios.get(`${baseUrl}files?path=/`);
    setFiles(result.data);
    // setFiles(files.filter((f) => f.path !== file.path));
    handleSelectFile(null);
  };

  return (
    <div className="file-manager">
      <div className="file-list">
        <FileList
          files={files}
          currentDirectory={currentDirectory}
          onNavigate={handleNavigate}
          onSelect={handleSelectFile}
          onUpload={handleUpload}
          fetchData={fetchData}
        />
      </div>
      <div className="file-preview">
        {selectedFile && (
          <FilePreview
            file={selectedFile}
            onDelete={handleDeleteFile}
            setSelectedFile={handleSelectFile}
          />
        )}
      </div>
      <div>
        <div className="action-bar">
          <input type="file" onChange={handleUpload} />
          <button>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default FileManager;
