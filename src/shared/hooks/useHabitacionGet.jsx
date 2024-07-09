import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getHabitacion as getHabitacionRequest } from "../../services/api";

export const useHabitacionGet = () => {
    const [habitaciones, setHabitaciones] = useState([]);
    const [loading, setLoading] = useState(false);

    const getHabitaciones = async () => {
        setLoading(true);
        const habitacionData = await getHabitacionRequest();

        if (habitacionData.error) {
            setLoading(false);
            return toast.error(
                habitacionData.error,
                habitacionData.e?.response?.data || 'Error occurred when reading habitacion'
            );
        }

        setHabitaciones(habitacionData.data.habitaciones);
        setLoading(false);
        return habitacionData.data;
    }

    useEffect(() => {
        getHabitaciones();
    }, []);

    return {
        habitaciones,
        getHabitaciones,
        loading,
    }
}
