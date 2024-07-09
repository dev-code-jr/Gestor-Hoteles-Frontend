import React, { useEffect } from 'react';
import { useFetchLista } from "../../shared/hooks/useFetchLista";
import { useAcceptUser } from "../../shared/hooks/useAcceptUser";
import { useDeleteUser } from '../../shared/hooks/useDeleteUserI';
import "../../pages/myAccount/myAccount.css";
import { Navbar } from '../navbar/Navbar';
import { Link } from 'react-router-dom';

export const TablaLista = () => {
  const { users, getUsers, loading, error } = useFetchLista();
  const { acceptUser } = useAcceptUser();
  const { deleteUser } = useDeleteUser();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAccept = async (id) => {
    console.log('Accepting user:', id);
    await acceptUser(id);
    window.location.href = '/listaInteresados';
  }

  const handleReject = async (id) => {
    console.log('Rejecting user:', id);
    await deleteUser(id);
    window.location.href = '/listaInteresados';
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h2 className="caption">Interesados en ser administradores de hotel</h2>
        <div className="tableContainer">
          {users.length === 0 ? (
            <div>No hay interesados.</div>
          ) : (
            <>
              <table className="crud-table">
                <thead>
                  <tr className="crud-table__row">
                    <th className="crud-table__header-cell">Nombre</th>
                    <th className="crud-table__header-cell">Apellido</th>
                    <th className="crud-table__header-cell">Email</th>
                    <th className="crud-table__header-cell">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="crud-table__row">
                      <td className="crud-table__cell">{user.usuario.nombre}</td>
                      <td className="crud-table__cell">{user.usuario.apellido}</td>
                      <td className="crud-table__cell">{user.usuario.email}</td>
                      <td>
                        <button onClick={() => handleAccept(user.idUsuario)}>Aceptar</button>
                        <button onClick={() => handleReject(user.idUsuario)}>Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
        <Link to="/plataformManager">
          <button>Regresar a Plataforma Admin</button>
        </Link>
      </div>
    </>
  );
  
};
