import {fetchHotelReservations} from '../../services/api'
import Chart from 'chart.js/auto';
import { useEffect } from 'react';
export const ReportHotels = ({autoRender}) => {
    useEffect(() => {
        if (autoRender) {
            handleClick();
        }
    }, [autoRender]);

    const handleClick = async () => {
        const response = await fetchHotelReservations();
        const data = response.data.hotels;

        renderChart(data);
    };

    const renderChart = (data) => {
        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(hotel => hotel.nombreHotel),
                datasets: [{
                    label: 'Total de Reservaciones',
                    data: data.map(hotel => hotel.totalReservations),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    return (
        <div className='button-grafic-container'>
            <canvas id="myChart"></canvas>
            {!autoRender && (
                <button onClick={handleClick}>
                    Ver Gráfica de Hoteles Más Solicitados
                </button>
            )}
        </div>
    );
};