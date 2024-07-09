import { useState } from "react";
import { Input } from "../Input";
import { useRegisterHabitacion } from "../../shared/hooks/useRegistroHabitaciones";
export const RegistroHabitaciones = () => {
  const { registerHabitacion, isLoading } = useRegisterHabitacion();

  const [registerData, setRegisterData] = useState({
    tipoHabitacion: { value: "", isValid: false, showError: false },
    capacidadPersonas: { value: "", isValid: false, showError: false },
    precio: { value: "", isValid: false, showError: false },
    fotos: { value: "", isValid: false, showError: false },
    precioPorNoche: { value: "", isValid: false, showError: false },
    disponibleApartir: { value: "", isValid: false, showError: false },
  });

  const handleInputValueChange = (value, field) => {
    setRegisterData((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = value.trim() !== "";
    setRegisterData((prevState) => ({
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
    await registerHabitacion(
      registerData.tipoHabitacion.value,
      registerData.capacidadPersonas.value,
      registerData.precio.value,
      registerData.fotos.value,
      registerData.precioPorNoche.value,
      registerData.disponibleApartir.value
    );
  };

  return (
    <div className="body">
    <div className="form-container-habitaciones">
      <form onSubmit={handleSubmit}>
        <Input
          field="tipoHabitacion"
          label="Tipo de Habitación"
          value={registerData.tipoHabitacion.value}
          onChangeHandler={handleInputValueChange}
          type="text"
          showErrorMessage={registerData.tipoHabitacion.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="capacidadPersonas"
          label="Capacidad de Personas"
          value={registerData.capacidadPersonas.value}
          onChangeHandler={handleInputValueChange}
          type="number"
          showErrorMessage={registerData.capacidadPersonas.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="precio"
          label="Precio"
          value={registerData.precio.value}
          onChangeHandler={handleInputValueChange}
          type="number"
          showErrorMessage={registerData.precio.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="fotos"
          label="Fotos"
          value={registerData.fotos.value}
          onChangeHandler={handleInputValueChange}
          type="file"
          showErrorMessage={registerData.fotos.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="precioPorNoche"
          label="Precio por Noche"
          value={registerData.precioPorNoche.value}
          onChangeHandler={handleInputValueChange}
          type="number"
          showErrorMessage={registerData.precioPorNoche.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <Input
          field="disponibleApartir"
          label="Disponible a partir de"
          value={registerData.disponibleApartir.value}
          onChangeHandler={handleInputValueChange}
          type="date"
          showErrorMessage={registerData.disponibleApartir.showError}
          validationMessage="Este campo es obligatorio"
          onBlurHandler={handleInputValidationOnBlur}
        />
        <button type="submit" disabled={isLoading}>Registrar Habitación</button>
      </form>
    </div>
    </div>
  );
};