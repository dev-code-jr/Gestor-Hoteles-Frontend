import React from 'react';
import { useNavigate } from "react-router-dom";
import { useUserDetails } from "../../shared/hooks";
import logo from '../../assets/img/logoPrincipal.png';
import '../../pages/dashboard/dashboardPage.css';

const NavButton = ({ text, onClickHandler }) => {
  return (
    <span className="nav-button" onClick={onClickHandler}>
      {text}
    </span>
  );
};

export const Navbar = () => {
  const { isLogged, logout } = useUserDetails();
  const navigate = useNavigate();

  const handleNavigateToAuthPage = () => {
    navigate('/auth');
  };

  const handleNavigateToMyAccount = () => {
    navigate('/myAccount');
  };

  const handleRecargar = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar-container">
      <img src={logo} onClick={handleRecargar} alt="Logo" className="navbar-logo" />
      <div className="navbar-buttons">
        {!isLogged ? (
          <NavButton text='Login' onClickHandler={handleNavigateToAuthPage} />
        ) : (
          <>
            <NavButton text='My Account' onClickHandler={handleNavigateToMyAccount} />
            <NavButton text='Logout' onClickHandler={handleLogout} />
          </>
        )}
      </div>
    </div>
  );
};