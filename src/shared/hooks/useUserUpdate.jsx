import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getUserById, userUpdate } from "../../services/api";

export const useUserUpdate = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUserDetails = async (userId) => {
    setLoading(true);
    const response = await getUserById(userId);

    if (response.error) {
      toast.error(
        response.e?.response?.data || "Ocurrió un error al obtener los datos del usuario"
      );
      setLoading(false);
      return;
    }

    setUserDetails(response.data);
    setLoading(false);
  };

  const saveUserDetails = async (userId, data) => {
    const response = await userUpdate(userId, data);

    if (response.error) {
      return toast.error(
        response.e?.response?.data || "Error al actualizar la información"
      );
    }

    toast.success("Información actualizada exitosamente");
    setUserDetails(response.data);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.id) {
      fetchUserDetails(user.id);
    }
  }, []);

  return {
    isFetching: loading,
    userDetails,
    saveUserDetails,
  };
};
