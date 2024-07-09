import React from 'react'
import { useState } from 'react'
import { deleteHabitation } from '../../services/api'
export const useDeleteHabitation = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const deleteHabitationById = async (habitacionId) =>{
        setLoading(true)
        setError(null)
        try {
            const response = await deleteHabitation(habitacionId)
            return response.data
        } catch (e) {
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }
  return{deleteHabitationById, loading, error}
}

