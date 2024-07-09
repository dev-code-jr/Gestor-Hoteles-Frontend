// HabitacionesByUsers.js
import React from 'react';
import { useHabitacionGet } from '../../shared/hooks';
import '../../pages/dashboard/dashboardPage.css'; // Make sure to include the CSS file

export const HabitacionesByUsers = () => {
    const { habitaciones, loading } = useHabitacionGet();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Habitaciones</h2>
            <div className="habitaciones-container">
                {habitaciones.map((habitacion) => (
                    <div key={habitacion._id} className="habitacion-card">
                        <h3>{habitacion.tipoHabitacion}</h3>
                        <p>Capacidad: {habitacion.capacidadPersonas} personas</p>
                        <p>Precio por Noche: ${habitacion.precioPorNoche}</p>
                        <p>Disponible a partir de: {new Date(habitacion.disponibleApartir).toLocaleDateString()}</p>
                        <div className="habitacion-fotos">
                            {habitacion.fotos.map((foto, index) => (
                                <img key={index} src={foto} alt={`Habitación ${habitacion.tipoHabitacion} - ${index + 1}`} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
