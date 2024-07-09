import { useState, useEffect } from "react";
import { Modal, Button, Form, Spinner, Alert } from "react-bootstrap";
import { InputHabitation } from "../InputHabitation";
import { useUpdateHabitation } from "../../shared/hooks/useUpdateHabitation";
export const UpdateHabitationModal =({show, handleClose, habitacion})=>{
    const {updateHabitation, loading, error} = useUpdateHabitation()
    const [formData, setFormData] = useState({...habitacion})
    useEffect(() => {
        setFormData({ ...habitacion });
    }, [habitacion]);

    const handleChange = (value, field) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleSubmit = async () => {
        await updateHabitation(habitacion._id, formData);
        handleClose();
        window.location.href = '/hotelManager'
    };
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Actualizar Habitation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {loading && <Spinner animation="border" />}
                {error && <Alert variant="danger">{error}</Alert>}
                {!loading && (
                    <Form>
                    <InputHabitation
                        field="tipoHabitacion"
                        label="Tipo de Habitación"
                        value={formData.tipoHabitacion}
                        onChangeHandler={handleChange}
                        type="text"
                    />
                    <InputHabitation
                        field="capacidadPersonas"
                        label="Capacidad"
                        value={formData.capacidadPersonas}
                        onChangeHandler={handleChange}
                        type="number"
                    />
                    <InputHabitation
                        field="precioPorNoche"
                        label="Precio por Noche"
                        value={formData.precioPorNoche}
                        onChangeHandler={handleChange}
                        type="number"
                    />
                </Form>
                )}
        </Modal.Body>
        <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSubmit}>
                    Guardar Cambios
                </Button>
            </Modal.Footer>
        </Modal>

    )
}