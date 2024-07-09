import { useState, useEffect } from 'react';
import { getHabitationsFromHotel } from '../../services/api';

export const useGetHabitationFromHotel = () => {
    const [habitaciones, setHabitaciones] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchHabitations = async () => {
            try {
                const response = await getHabitationsFromHotel();
                if (!response.error) {
                    setError('');
                    setHabitaciones(response.data.habitaciones);
                } else {
                    setHabitaciones([])
                    setError('Errot al traer las habitaciones');
                }
            } catch (e) {
                setError('Error fetching habitations');
            } finally {
                setLoading(false);
            }
        };

        fetchHabitations();
    }, []);

    return { habitaciones, loading, error };
};