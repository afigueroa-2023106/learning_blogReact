import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="error-message">
      <h3>Error</h3>
      <p>{message}</p>
      <button onClick={() => window.location.reload()}>Reintentar</button>
    </div>
  );
};

export default ErrorMessage;