import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerHotel as registerHotelRequest} from "../../services/api";
import toast from "react-hot-toast";

export const useRegisterH = () =>{
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const registerHotel = async(
        nombreHotel, 
        direccion, 
        categoria, 
        rangoPrecios, 
        comodidades, 
        fotosHotel, 
        usoHotelPorEvento, 
        nombre, 
        descripcion, 
        precio ) =>{
        setIsLoading(true)
            
        const response = await registerHotelRequest({
            nombreHotel, 
            direccion, 
            categoria, 
            rangoPrecios, 
            comodidades, 
            fotosHotel, 
            usoHotelPorEvento, 
            nombre, 
            descripcion, 
            precio 
        })

        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al registrar su Hotel'
            )
        }

        const {userDetails} = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/*')
    }
    return{
        registerHotel,
        isLoading
    }
}
