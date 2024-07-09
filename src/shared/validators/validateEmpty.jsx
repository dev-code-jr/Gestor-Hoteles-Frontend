export const validateEmpty = (nombre, apellido, foto) => {
    const regex = /^(?!\s)[^\s]+(?<!\s)$/;
    return regex.test(nombre) && regex.test(apellido) && regex.test(foto);
}

export const validateEmptyMessage = 'El nombre, apellido y foto no deben tener espacios al principio ni al final, y no pueden estar vacíos';
