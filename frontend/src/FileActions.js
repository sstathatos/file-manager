import React from 'react';
import PropTypes from 'prop-types';

const FileActions = ({ file, onDelete }) => {
  return (
    <div>
      <button onClick={() => onDelete(file)}>Delete</button>
      <button>Download</button>
      <button>Share</button>
    </div>
  );
};

FileActions.propTypes = {
  file: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default FileActions;
