import { useState } from "react";
import { acceptUser as acceptUserRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useAcceptUser = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const acceptUser = async (userId) => {
        setLoading(true);
        setError(null);
        try {
            const response = await acceptUserRequest(userId);
            if (response.error) {
                toast.error(
                    response.error,
                    response.e?.response?.data || "Error occurred when accepting user"
                );
                setError(response.error);
            } else {
                toast.success("User accepted successfully");
            }
        } catch (err) {
            toast.error("Error occurred when accepting user");
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        acceptUser,
        loading,
        error,
    };
}