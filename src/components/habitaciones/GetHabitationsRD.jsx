import React from 'react';
import { useState } from 'react';
import { useGetHabitationFromHotel } from '../../shared/hooks/useGetHabitationFromHotel';
import { Card, Carousel, Spinner, Alert, Container, Row, Col, Button} from 'react-bootstrap';
import { UpdateHabitationModal } from './UpdateHabitationModal';
import { DeleteConfirmationModal } from './DeleteHabitationModal';
export const GetHabitationsRD = () => {
    const { habitaciones, loading, error } = useGetHabitationFromHotel();
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedHabitacion, setSelectedHabitacion] = useState(null);
    const handleUpdateClick = (habitacion) => {
        setSelectedHabitacion(habitacion);
        setShowUpdateModal(true);
    };

    const handleDeleteClick = (habitacion) => {
        setSelectedHabitacion(habitacion);
        setShowDeleteModal(true);
    };
    if (loading) {
        return <Spinner animation="border" />;
    }

    if (error) {
        return <Alert variant='danger'>{error}</Alert>;
    }

    if (!habitaciones || habitaciones.length === 0) {
        return <Alert variant='info'>No hay habitaciones disponibles.</Alert>;
    }

    return (
        <Container>
        <h2>Habitaciones del Hotel</h2>
        <Row>
            {habitaciones.map(habitacion => (
                <Col key={habitacion._id} sm={12} md={6} lg={4} xl={3} className="mb-4">
                    <Card style={{ width: '15rem' }}>
                        {habitacion.fotos.length > 1 ? (
                            <Carousel>
                                {habitacion.fotos.map((foto, index) => (
                                    <Carousel.Item key={index}>
                                        <img
                                            className="d-block w-100"
                                            src={foto}
                                            alt={`Imagen ${index + 1}`}
                                        />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        ) : (
                            habitacion.fotos.length === 1 && (
                                <Card.Img variant="top" src={habitacion.fotos[0]} />
                            )
                        )}
                        <Card.Body>
                            <Card.Title>{habitacion.tipoHabitacion || 'Tipo de Habitación Desconocida'}</Card.Title>
                            <Card.Text>
                                Capacidad: {habitacion.capacidadPersonas || 'N/A'}
                                <br />
                                Precio por Noche: {habitacion.precioPorNoche || 'N/A'}
                            </Card.Text>
                            <Button variant="primary" className="mr-2" onClick={() => handleUpdateClick(habitacion)}>Actualizar</Button>
                            <Button variant="danger" onClick={() => handleDeleteClick(habitacion)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        {selectedHabitacion && (
                <UpdateHabitationModal
                    show={showUpdateModal}
                    handleClose={() => setShowUpdateModal(false)}
                    habitacion={selectedHabitacion}
                />
            )}
            {selectedHabitacion && (
                <DeleteConfirmationModal
                    show={showDeleteModal}
                    handleClose={() => setShowDeleteModal(false)}
                    habitacionId={selectedHabitacion._id}
                />
            )}
    </Container>
    );
};