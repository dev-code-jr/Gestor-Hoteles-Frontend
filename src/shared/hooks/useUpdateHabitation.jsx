import React from 'react'
import { useState } from 'react'
import { putHabitacion } from '../../services/api'
export const useUpdateHabitation = () => {
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    const updateHabitation = async(habitacionId, data)=>{
        setLoading(true)
        setError(null)
        try {
            const response = await putHabitacion(habitacionId, data)
            return response.data
        } catch (e) {
            setError(e.message)
        }finally{
            setLoading(false)
        }
    }
  return{updateHabitation, loading, error}
}

