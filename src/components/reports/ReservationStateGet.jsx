import { useEffect, useState } from 'react';
import { fetchReservationsForHotel } from '../../services/api';
import Card from 'react-bootstrap/Card';
import { CardGroup } from 'react-bootstrap';
export const ReservationStateGet = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState('');
  useEffect(() => {
    const fetchReservations = async () => {
      const response = await fetchReservationsForHotel();
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
  const getBgColor = (estadoReserva) => {
    switch (estadoReserva) {
      case 'CANCELADA':
        return 'danger';
      case 'RESERVADA':
        return 'success';
      case 'PENDIENTE':
        return 'warning';
      default:
        return 'light';
    }
  };
  return (
    <div>
      <h2 style={{color: 'white'}}>Estado Reservaciones del Hotel</h2>
      {error && <p className="text-danger">{error}</p>}
      <div>
        <CardGroup>
          {reservations.map((reservation) => (
            <Card
              bg={getBgColor(reservation.estadoReserva)}
              text={
                getBgColor(reservation.estadoReserva) === 'warning'
                  ? 'dark'
                  : 'white'
              }
              key={reservation._id}
              style={{ width: '18rem', margin: '10px' }}
            >
              <Card.Body>
                <Card.Title>
                  {reservation.idHabitacion.tipoHabitacion}
                </Card.Title>
                <Card.Text>
                  Fecha Inicio: {reservation.fechaInicio}
                  <br />
                  Fecha Fin: {reservation.fechaFin}
                  <br />
                  Estado Reserva: {reservation.estadoReserva}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </CardGroup>
      </div>
    </div>
  );
};
