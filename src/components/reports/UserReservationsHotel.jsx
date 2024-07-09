import { useEffect, useState } from 'react';
import { fetchUsersWithReservationsInHotel } from '../../services/api';
import { CardGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
export const HotelUserReservations = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetchUsersWithReservationsInHotel();
      if (!response.error) {
        setReservations(response.data.reservations);
        setError('');
      } else {
        setReservations([]);
        setError('Error al traer las reservaciones');
      }
    };
    fetchReservations();
  }, []);
  return (
    <div>
      <h2 style={{color: 'white'}}>Usuarios con reservaciones del Hotel</h2>
      {error && <p className="text-danger">{error}</p>}
      <div>
        <CardGroup>
          {reservations.map((reservation) => (
            <Card
              key={reservation._id}
              style={{ width: '18rem', margin: '10px' }}
            >
              <Card.Body>
                <Card.Img variant="top" 
                  src={reservation.idUsuario.foto} 
                  style={{ width: '100px', height: '100px', objectFit: 'cover'}} />
                <Card.Title>{reservation.idUsuario.email}</Card.Title>
                <Card.Text>
                  Nombre: {reservation.idUsuario.nombre}
                  <br />
                  Apellido: {reservation.idUsuario.apellido}
                  <br/>
                  Fecha Inicio: {reservation.fechaInicio}
                  <br />
                  Fecha Fin: {reservation.fechaFin}
                  <br />
                  Estado Reserva: {reservation.estadoReserva}
                  <br/>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
    </div>
  );
};
