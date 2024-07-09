import React from 'react';
import '../pages/auth/authPage.css'; // Asegúrate de que este archivo CSS está correctamente importado

export const Input = ({
  field,
  label,
  value,
  onChangeHandler,
  type,
  showErrorMessage,
  validationMessage,
  onBlurHandler,
  textarea,
}) => {
  const handleValueChange = (event) => {
    onChangeHandler(event.target.value, field);
  };

  const handleInputBlur = (event) => {
    onBlurHandler(event.target.value, field);
  };

  return (
    <div className="input-container">
      <div>
        <span>{label}</span>
      </div>
      {textarea ? (
        <textarea
          className={`input-field ${showErrorMessage ? 'input-error' : ''}`}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
          rows={5}
          style={{ maxWidth: '400px' }}
        />
      ) : (
        <input
          className={`input-field ${showErrorMessage ? 'input-error' : ''}`}
          type={type}
          value={value}
          onChange={handleValueChange}
          onBlur={handleInputBlur}
        />
      )}
      {showErrorMessage && (
        <span className="error-message">{validationMessage}</span>
      )}
    </div>
  );
};
