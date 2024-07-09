// shared/hooks/useUserById.js

import { useState, useCallback } from 'react';
import { toast } from 'react-hot-toast';
import { getUserById as getUserByIdRequest } from '../../services/api';

export const useUserById = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [isFetching, setIsFetching] = useState(false);

  const getUserById = useCallback(async (id) => {
    setIsFetching(true);
    const responseData = await getUserByIdRequest(id);

    if (responseData.error) {
      toast.error(
        responseData.e?.response?.data ||
        'Error al cargar la información del usuario'
      );
      setIsFetching(false);
      return;
    }
    setUserDetails(responseData.data.registro); // Asume que `data.registro` es donde está la info del usuario
    setIsFetching(false);
  }, []);

  return {
    userDetails,
    isFetching,
    getUserById
  };
};
