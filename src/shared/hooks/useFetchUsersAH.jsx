import { useState, useCallback } from "react";
import { getUserAHoteles as getUserARequest } from "../../services/api";
import toast from "react-hot-toast";

export const useFetchUsersAH = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getUsers = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const userData = await getUserARequest();
            console.log('userData:', userData); 
            if (userData.error) {
                toast.error(
                    userData.error,
                    userData.e?.response?.data || 'Error occurred when reading users'
                );
                setError(userData.error);
            } else {
                setUsers(userData.data.registros);
            }
        } catch (err) {
            toast.error('Error occurred when fetching users');
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        users,
        getUsers,
        loading,
        error,
    };
};
