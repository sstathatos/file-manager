import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FileManager.css';
import FileList from './FileList';
import FilePreview from './FilePreview';

const baseUrl = "http://localhost:8000/"

const FileManager = () => {
  const [currentDirectory, setCurrentDirectory] = useState('/');
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);

  const fetchData = async () => {
      const result = await axios.get(`${baseUrl}files?path=${currentDirectory}`);
      setFiles(result.data);
    };

  useEffect(() => {
    console.log('filemanager use effect called!')
    fetchData();
    handleSelectFile(null)
  }, [currentDirectory]);

  const handleNavigate = (path) => {
    setCurrentDirectory(path);
  };

  const handleSelectFile = (file) => {
    setSelectedFile(file);
  };

  const handleUploadFile = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    axios.post('/files/', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  };

  const handleDeleteFile = async (file) => {
    await axios.delete(`/files/${file.file_id}`);
    const result = await axios.get(`/files?path=${currentDirectory}`);
    setFiles(result.data);
    // setFiles(files.filter((f) => f.path !== file.path));

  };

  return (
    <div className="file-manager">
      <div className="file-list">
        <FileList
          files={files}
          currentDirectory={currentDirectory}
          onNavigate={handleNavigate}
          onSelect={handleSelectFile}
          onUpload={handleUploadFile}
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
    </div>
  );
};

export default FileManager;