import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'
import { registroHabitacion } from '../../services/api'
import { InputHabitation } from '../InputHabitation'
import toast from 'react-hot-toast'
export const AddHabitationForm = () => {
    const [formData, setFormData] = useState({
        tipoHabitacion: '',
        capacidadPersonas:'',
        precio:'',
        fotos:[],
        precioPorNoche:'',
        disponibleAPartir:''
    })
    const [error, setError] = useState('')
    const handleInputChange = (value, field) =>{
        setFormData({...formData, [field]:value})
    }
    const handleFormSubmit = async (event) =>{
        event.preventDefault()
        const response = await registroHabitacion(formData)
        if (response.error) {
            setError('Error al registrar la habitación');
          } else {
            setError('');
            toast.success('Habitación registrada con éxito');
            setFormData({
                tipoHabitacion: '',
                capacidadPersonas: '',
                precio: '',
                fotos: [],
                precioPorNoche: '',
                disponibleAPartir: ''
            });
          }
    }
  return (
    <div style={{backgroundColor:"white", padding:"15px"}}>
      <h2>Registro de Habitación</h2>
      {error && <p className='text-danger'>{error}</p>}
      <Form onSubmit={handleFormSubmit}>
            <InputHabitation
                field="tipoHabitacion"
                label="TipoHabitacion"
                value={formData.tipoHabitacion}
                onChangeHandler={handleInputChange}
                type="text"
            />
            <InputHabitation
                field="capacidadPersonas"
                label="CapacidadPersonas"
                value={formData.capacidadPersonas}
                onChangeHandler={handleInputChange}
                type="number"
            />
            <InputHabitation
                field="precio"
                label="Precio"
                value={formData.precio}
                onChangeHandler={handleInputChange}
                type="number"
            />
            <InputHabitation
                field="fotos"
                label="Fotos"
                value={formData.fotos.join(', ')}
                onChangeHandler={(value) => handleInputChange(value.split(',').map(url => url.trim()), 'fotos')}
                type="text"
            />
            <InputHabitation
                field="precioPorNoche"
                label="PrecioPorNoche"
                value={formData.precioPorNoche}
                onChangeHandler={handleInputChange}
                type="number"
            />
            <InputHabitation
                field="disponibleAPartir"
                label="DisponibleAPartir"
                value={formData.disponibleAPartir}
                onChangeHandler={handleInputChange}
                type="date"
            />
            <Button variant="primary" type="submit">
                Registrar Habitación
            </Button>
      </Form>
    </div>
  )
}
