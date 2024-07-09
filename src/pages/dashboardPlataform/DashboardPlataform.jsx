import React from 'react';
import { ReportHotels } from '../../components/reports/ReportHotels';
import { Navbar } from '../../components/navbar/Navbar';
import { Link } from 'react-router-dom';
import { TableUsuarioRegiste } from '../../components/TableUsuario/TableUsuarios';

export const DashboardPlataform = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Link to="/reportHotel">
          <button>Generar Reporte de Hoteles</button>
        </Link>
        <Link to="/usuarios">
          <button>Ver usuarios registrados en la Plataforma</button>
        </Link>
        <Link to="/adminsHotel">
          <button>Ver usuarios registrados en la Plataforma</button>
        </Link>
        <Link to="/listaInteresados">
          <button>Ver usuarios interesados en ser administradores de hoteles</button>
        </Link>
      </div>
    </>
  );
};
