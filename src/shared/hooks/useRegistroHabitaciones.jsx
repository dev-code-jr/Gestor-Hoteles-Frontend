import { useState } from "react"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { registroHabitacion as registerHabitacionRequest} from "../../services/api";


export const useRegisterHabitacion = () =>{
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const registerHabitacion = async(
        tipoHabitacion, 
        capacidadPersonas, 
        precio, 
        fotos, 
        precioPorNoche, 
        disponibleApartir

    )=>{
        setIsLoading(true)
    
        const response = await registerHabitacionRequest({
            tipoHabitacion, 
            capacidadPersonas,
            precio, 
            fotos, 
            precioPorNoche, 
            disponibleApartir
        })
    
        setIsLoading(false)
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al registrar su habitación'
            )
        }
    
        const{userDetails} = response.data
    
        localStorage.setItem('user', JSON.stringify(userDetails))
    
        navigate('/')
    
    }

    return{
        registerHabitacion,
        isLoading
    }
}