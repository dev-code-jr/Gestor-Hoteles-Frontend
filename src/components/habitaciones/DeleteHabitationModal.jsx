import { Modal, Button, Spinner, Alert } from "react-bootstrap";
import { useDeleteHabitation } from "../../shared/hooks/useDeleteHabitation";
export const DeleteConfirmationModal = ({show, handleClose, habitacionId}) =>{
    const {deleteHabitationById, loading, error}= useDeleteHabitation()
    const handleDelete = async () =>{
        await deleteHabitationById(habitacionId)
        handleClose()
        window.location.href = '/hotelManager'
    }
    return(
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmar Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {loading && <Spinner animation="border" />}
                {error && <Alert variant="danger">{error}</Alert>}
                {!loading && <p>¿Está seguro de eliminar esta habitacion?</p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}