import { useState } from "react";
import { deleteUserListaEspera as deleteUserRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useDeleteUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteUser = async (userId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await deleteUserRequest(userId);
            if (response.error) {
                toast.error(
                    response.error,
                    response.e?.response?.data || "Error occurred when deleting user"
                );
                setError(response.error);
            } else {
                toast.success("User deleted successfully");
            }
        } catch (err) {
            toast.error("Error occurred when deleting user");
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        deleteUser,
        loading,
        error,
    };
}