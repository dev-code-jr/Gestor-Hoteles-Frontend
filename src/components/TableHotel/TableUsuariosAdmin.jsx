import React, { useEffect } from 'react';
import { useFetchUsersAH } from "../../shared/hooks/useFetchUsersAH";
import "../../pages/myAccount/myAccount.css";
import { Navbar } from '../navbar/Navbar';
import { Link } from 'react-router-dom';

export const TableUsuarioHotel = () => {
  const { users, getUsers, loading, error } = useFetchUsersAH();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
    <Navbar />
    <div className="container">
      <h2 className="caption">Administradores de hoteles registrados</h2>
      <div className="tableContainer">
        <table className="crud-table">
          <thead>
            <tr className="crud-table__row">
              <th className="crud-table__header-cell">Nombre</th>
              <th className="crud-table__header-cell">Apellido</th>
              <th className="crud-table__header-cell">Foto</th>
              <th className="crud-table__header-cell">Email</th>
              <th className="crud-table__header-cell">Contraseña</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="crud-table__row">
                <td className="crud-table__cell">{user.nombre}</td>
                <td className="crud-table__cell">{user.apellido}</td>
                <td className="crud-table__cell">
                  <img
                    src={user.foto}
                    alt={`${user.nombre} ${user.apellido}`}
                    className="user-photo"
                    />
                </td>
                <td className="crud-table__cell">{user.email}</td>
                <td className="crud-table__cell">{user.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/plataformManager">
          <button>Regresar a Plataforma Admin</button>
        </Link>
    </div>
    </>
  );
};
