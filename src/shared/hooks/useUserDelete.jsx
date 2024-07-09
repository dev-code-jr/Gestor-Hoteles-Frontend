import { useState } from "react";
import { deleteUser } from "../../services/api"; 

export const useUserDelete = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState(null);

  const handleDeleteUser = async () => {
    setIsDeleting(true);
    setError(null);

    const user = JSON.parse(localStorage.getItem("user"));
    const userId = user ? user.id : null;

    if (!userId) {
      setIsDeleting(false);
      setError("User ID not found in localStorage");
      return;
    }

    try {
      await deleteUser(userId);
      setIsDeleting(false);
      localStorage.removeItem("user");
    } catch (e) {
      setIsDeleting(false);
      setError(e);
    }
  };

  return {
    isDeleting,
    error,
    handleDeleteUser,
  };
};
