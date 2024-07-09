//import "./authPage.css";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";
import { useState } from "react";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div>
      {isLogin ? (
        <Login switchAuthHandler={handleAuthPageToggle}/>
      ) : (
        <Register switchAuthHandler={handleAuthPageToggle}/>
      )}
    </div>
  )
}