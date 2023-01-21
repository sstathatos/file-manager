import React, { useState } from 'react';
let baseUrl = 'http://localhost:8000/'

// const fmFetch = async (
//   url,
// ) => {
//     return await fetch(`${baseUrl}${url}`);
// }

function FileManager() {
  const [files, setFiles] = useState([]);

  async function fetchFiles() {
    const response = await fetch(`${baseUrl}/files`);
    console.log(response)
    const data = await response.json();
    setFiles(data);
  }

  async function handleFileCreate(file) {
    const formData = new FormData();
    formData.append('file', file);
    await fetch(`${baseUrl}/files`, {
      method: 'POST',
      body: formData
    });
    fetchFiles();
  }

  async function handleFileUpdate(fileId, updatedFile) {
    const formData = new FormData();
    formData.append('file', updatedFile);
    await fetch(`/files/${fileId}`, {
      method: 'PUT',
      body: formData
    });
    fetchFiles();
  }

  async function handleFileDelete(fileId) {
    await fetch(`/files/${fileId}`, {
      method: 'DELETE'
    });
    fetchFiles();
  }

  return (
    <div>
      <input type="file" onChange={event => handleFileCreate(event.target.files[0])} />
      <button onClick={fetchFiles}>Refresh</button>
      <ul>
        {files.map(file => (
          <li key={file.id}>
            {file.name}
            <input type="file" onChange={event => handleFileUpdate(file.id, event.target.files[0])} />
            <button onClick={() => handleFileDelete(file.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileManager;