import { useState } from "react"
import { register as registerRequest} from "../../services/api"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const register = async (nombre, apellido, foto, email, password, role) => {
        setIsLoading(true)

        const response = await registerRequest({
            nombre, 
            apellido,
            foto, 
            email, 
            password, 
            role
        })

        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            )
        }

        const { userDetails } = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')
    }
    return{
        register,
        isLoading
    }
}
