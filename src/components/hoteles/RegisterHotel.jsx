import { useState } from "react";
import {useRegisterH} from "../../shared/hooks/useRegisterH"
import { Input } from "../Input";

export const RegisterHotel = () => {
  const { registerHotel, isLoading } = useRegisterH();

  const [registerH, setRegisterH] = useState({
    nombreHotel: { value: "", isValid: false, showError: false },
    direccion: { value: "", isValid: false, showError: false },
    categoria: { value: "", isValid: false, showError: false },
    rangoPrecios: { value: "", isValid: false, showError: false },
    comodidades: { value: "", isValid: false, showError: false },
    fotosHotel: { value: "", isValid: false, showError: false },
    usoHotelPorEvento: { value: "", isValid: false, showError: false },
    nombre: { value: "", isValid: false, showError: false },
    descripcion: { value: "", isValid: false, showError: false },
    precio: { value: "", isValid: false, showError: false },
  });

  const handleInputValueChange = (value, field) => {
    setRegisterH((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = value.trim() !== "";  // Añade aquí tu lógica de validación
    setRegisterH((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    Object.keys(registerH).forEach((key) => {
      if (key === "fotosHotel") {
        Array.from(registerH[key].value).forEach((file) => {
          formData.append(key, file);
        });
      } else {
        formData.append(key, registerH[key].value);
      }
    });

    await registerHotel(
      registerH.nombreHotel.value,
      registerH.direccion.value,
      registerH.categoria.value,
      registerH.rangoPrecios.value,
      registerH.comodidades.value,
      registerH.fotosHotel.value,
      registerH.usoHotelPorEvento.value,
      registerH.nombre.value,
      registerH.descripcion.value,
      registerH.precio.value
    );
  };

  return (
    <div className="body">
    <div className="form-container">
      <h1>Registra tu Hotel</h1>
      <form className="registerH-form-Container" onSubmit={handleSubmit}>
        <Input
          field="nombreHotel"
          label="Nombre del hotel"
          value={registerH.nombreHotel.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerH.nombreHotel.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="direccion"
          label="Dirección"
          value={registerH.direccion.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerH.direccion.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="categoria"
          label="Categoría"
          value={registerH.categoria.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerH.categoria.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="rangoPrecios"
          label="Rango de precios"
          value={registerH.rangoPrecios.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerH.rangoPrecios.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="comodidades"
          label="Comodidades"
          value={registerH.comodidades.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerH.comodidades.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <div className="form-group">
          <label className="form-label" htmlFor="fotosHotel">
            Fotos del hotel:
          </label>
          <input
            className="form-input"
            type="file"
            id="fotosHotel"
            multiple
            onChange={(e) =>
              handleInputValueChange(e.target.files, "fotosHotel")
            }
            onBlur={(e) =>
              handleInputValidationOnBlur(e.target.files, "fotosHotel")
            }
          />
          {registerH.fotosHotel.showError && (
            <span className="error-message">Este campo es obligatorio</span>
          )}
        </div>
        <Input
          field="usoHotelPorEvento"
          label="Uso del hotel por evento"
          value={registerH.usoHotelPorEvento.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerH.usoHotelPorEvento.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="nombre"
          label="Nombre (responsable)"
          value={registerH.nombre.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerH.nombre.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="descripcion"
          label="Descripción"
          value={registerH.descripcion.value}
          onChangeHandler={handleInputValueChange}
          textarea
          showErrorMessage={registerH.descripcion.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="precio"
          label="Precio"
          value={registerH.precio.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerH.precio.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <button type="submit" disabled={isLoading}>
          Registrar Hotel
        </button>
      </form>
    </div>
    </div>
  );
};