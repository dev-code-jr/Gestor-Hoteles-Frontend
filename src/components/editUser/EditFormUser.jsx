import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../Input";
import { useUserUpdate } from "../../shared/hooks";
import { Navbar } from "../navbar/Navbar";
import {
  emailValidationMessage,
  validateEmptyMessage,
  validateEmail,
  validateEmpty,
} from "../../shared/validators";
import "./editFormUser.css";

export const EditFormUser = () => {
  const { userDetails, saveUserDetails, isFetching } = useUserUpdate();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    nombre: {
      value: "",
      isValid: true,
      showError: false,
    },
    apellido: {
      value: "",
      isValid: true,
      showError: false,
    },
    foto: {
      value: "",
      isValid: true,
      showError: false,
    },
    email: {
      value: "",
      isValid: true,
      showError: false,
    },
  });

  useEffect(() => {
    if (userDetails) {
      setFormState({
        nombre: {
          value: userDetails.nombre || "",
          isValid: true,
          showError: false,
        },
        apellido: {
          value: userDetails.apellido || "",
          isValid: true,
          showError: false,
        },
        foto: {
          value: userDetails.foto || "",
          isValid: true,
          showError: false,
        },
        email: {
          value: userDetails.email || "",
          isValid: true,
          showError: false,
        },
      });
    }
  }, [userDetails]);

  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "nombre":
      case "apellido":
      case "foto":
        isValid = validateEmpty(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      default:
        break;
    }

    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleSaveUser = async (event) => {
    event.preventDefault();
    const userId = JSON.parse(localStorage.getItem("user")).id;
    await saveUserDetails(userId, {
      nombre: formState.nombre.value,
      apellido: formState.apellido.value,
      foto: formState.foto.value,
      email: formState.email.value,
    });
    navigate("/myaccount");
  };

  const isSubmitButtonDisabled =
    isFetching ||
    !formState.nombre.isValid ||
    !formState.apellido.isValid ||
    !formState.foto.isValid ||
    !formState.email.isValid;

  return (
    <div className="edit-user-body">
      <Navbar />
      <div className="edit-user-container">
        <h2 className="edit-user-title">Edit User</h2>
        <form onSubmit={handleSaveUser}>
          <div className="input-container">
            <Input
              field="nombre"
              label="Nombre"
              value={formState.nombre.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.nombre.showError}
              validationMessage={validateEmptyMessage}
              className={`input-field `}
            />
          </div>
          <div className="input-container">
            <Input
              field="apellido"
              label="Apellido"
              value={formState.apellido.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.apellido.showError}
              validationMessage={validateEmptyMessage}
              className={`input-field ${
                formState.apellido.showError ? "input-error" : ""
              }`}
            />

          </div>
          <div className="input-container">

            <Input
              field="foto"
              label="Foto"
              value={formState.foto.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.foto.showError}
              validationMessage={validateEmptyMessage}
              className={`input-field ${
                formState.foto.showError ? "input-error" : ""
              }`}
            />

          </div>
          <div className="input-container">

            <Input
              field="email"
              label="Email"
              value={formState.email.value}
              onChangeHandler={handleInputValueChange}
              onBlurHandler={handleInputValidationOnBlur}
              showErrorMessage={formState.email.showError}
              validationMessage={emailValidationMessage}
              className={`input-field ${
                formState.email.showError ? "input-error" : ""
              }`}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitButtonDisabled}
            className="edit-user-button"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
