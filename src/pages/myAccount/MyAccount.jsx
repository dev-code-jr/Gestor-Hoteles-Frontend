import { useState, useEffect } from 'react';
import { useUserById } from '../../shared/hooks';
import { useNavigate } from 'react-router-dom';
import { useUserDelete } from '../../shared/hooks';
import { Navbar } from '../../components/navbar/Navbar';
import { ConfirmModal } from '../../components/ConfirmModal';
import './myAccount.css';

export const MyAccount = () => {
  const { userDetails, getUserById } = useUserById();
  const { handleDeleteUser, isDeleting, error } = useUserDelete();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.id) {
      getUserById(user.id);
    }
  }, [getUserById]);

  if (!userDetails) {
    return <div>Error loading user details.</div>;
  }

  const handleEditClick = () => {
    navigate("/editUser");
  };

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    await handleDeleteUser();
    setShowModal(false);
    if (!error) {
      navigate("/login");
    }
  };

  const handleCancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div className='body'>
      <Navbar/>
      <div className="container">
        <h2>My Account</h2>
        <div className="card">
          <img src={userDetails.foto} alt="Profile" className="profile-img" />
          <div className="card-content">
            <h3>{`${userDetails.nombre} ${userDetails.apellido}`}</h3>
            <p>Email: {userDetails.email}</p>
            <div className="button-group">
              <button onClick={handleEditClick} className="btn edit-btn">Editar</button>
              <button onClick={handleDeleteClick} className="btn delete-btn">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
      <ConfirmModal
        show={showModal}
        message="¿Estás seguro de que deseas eliminar tu cuenta?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};
