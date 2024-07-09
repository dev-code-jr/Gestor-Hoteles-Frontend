import { Navbar } from '../../components/navbar/Navbar';
import { ReportHotels } from '../../components/reports/ReportHotels';
import { Link } from 'react-router-dom';
export const ReportHotelPage = () => {
  return (
    <>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <h1>Report Hotel</h1>
        <ReportHotels autoRender />
        <Link to="/plataformManager">
          <button>Regresar a Plataforma Admin</button>
        </Link>
      </div>
    </>
  );
};
