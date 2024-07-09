import React from 'react';
import logo from "../assets/img/fav.png";
import { useRegister } from "../shared/hooks";
import { Input } from "./Input";
import "../pages/auth/authPage.css";
import { useState } from "react";
import {
    emailValidationMessage,
    passwordValidationMessage,
    passwordConfirmationMessage,
    validateEmptyMessage,
    validatePassword,
    validatePasswordConfir,
    validateEmail,
    validateEmpty
} from "../shared/validators";

import './register.css';

export const Register = ({ switchAuthHandler }) => {
  const { register, isLoading } = useRegister();

  const [formState, setFormState] = useState({
    nombre: {
      value: "",
      isValid: false,
      showError: false,
    },
    apellido: {
      value: "",
      isValid: false,
      showError: false,
    },
    foto: {
      value: "",
      isValid: false,
      showError: false,
    },
    email: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
      showError: false,
    },
    passwordConfir: {
      value: "",
      isValid: false,
      showError: false,
    },
  });

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
        isValid = validateEmpty(value);
        break;
      case "apellido":
        isValid = validateEmpty(value);
        break;
      case "foto":
        isValid = validateEmpty(value);
        break;
      case "email":
        isValid = validateEmail(value);
        break;
      case "password":
        isValid = validatePassword(value);
        break;
      case "passwordConfir":
        isValid = validatePasswordConfir(formState.password.value, value);
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
  
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(formState);
    register(
      formState.nombre.value,
      formState.apellido.value,
      formState.foto.value,
      formState.email.value,
      formState.password.value
    );
  };
  
  const isSubmitButtonDisabled =
    isLoading ||
    !formState.nombre.isValid ||
    !formState.apellido.isValid ||
    !formState.foto.isValid ||
    !formState.email.isValid ||
    !formState.password.isValid ||
    !formState.passwordConfir.isValid;
    
  return (
    <div className="register-body">
      <div className="register-container">
        <div className="register-logo">
          <img src={logo} alt="Logo" className="register-logo" />
        </div>
        <h1 className="register-title">Registro</h1>
        <form>
          <Input
            className="register-input-field"
            field="nombre"
            label="Nombre"
            value={formState.nombre.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.nombre.showError}
            validationMessage={validateEmptyMessage}          
          />
          <Input
            className="register-input-field"
            field="apellido"
            label="Apellido"
            value={formState.apellido.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.apellido.showError}
            validationMessage={validateEmptyMessage}              
          />
          <Input
            className="register-input-field"
            field="foto"
            label="Foto"
            value={formState.foto.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.foto.showError}
            validationMessage={validateEmptyMessage}              
          />
          <Input
            className="register-input-field"
            field="email"
            label="Email"
            value={formState.email.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.email.showError}
            validationMessage={emailValidationMessage}          
          />        
          <Input
            className="register-input-field"
            field="password"
            label="Password"
            value={formState.password.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.password.showError}
            validationMessage={passwordValidationMessage}
          />
          <Input
            className="register-input-field"
            field="passwordConfir"
            label="Password Confirmation"
            value={formState.passwordConfir.value}
            onChangeHandler={handleInputValueChange}
            type="text"
            onBlurHandler={handleInputValidationOnBlur}
            showErrorMessage={formState.passwordConfir.showError}
            validationMessage={passwordConfirmationMessage}
          />
          <button className="register-button" onClick={handleRegister} disabled={isSubmitButtonDisabled}>
            Register
          </button>
        </form>
        <br />
        <span className="register-link" onClick={switchAuthHandler}>
          Ya tienes una cuenta? Inicia sesión!
        </span>
      </div>
    </div>
  );
};
