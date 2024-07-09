/* eslint-disable react/prop-types */
export const InputHabitation = ({
    field,
    label,
    value,
    onChangeHandler,
    type,
    showErrorMessage,
    validationMessage,
    textarea,
  }) => {
    const handleValueChange = (event) => {
      onChangeHandler(event.target.value, field);
    };

    return (
      <>
        <div className="input-container">
        <div>
          <span>{label}</span>
        </div>
        {textarea ? (
          <textarea
            className={`input-field ${showErrorMessage ? "input-error" : ""}`}
            value={value}
            onChange={handleValueChange}
            rows={5}
            style={{ maxWidth: "400px" }}
          />
        ) : (
          <input
            className={`input-field ${showErrorMessage ? "input-error" : ""}`}
            type={type}
            value={value}
            onChange={handleValueChange}
            style={{color:"black"}}
          />
        )}
        {showErrorMessage && (
          <span className="error-message">{validationMessage}</span>
        )}
      </div>
      </>
      
    );
  };
  