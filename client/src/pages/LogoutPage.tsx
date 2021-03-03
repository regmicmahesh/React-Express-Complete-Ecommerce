import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const LogoutPage: React.FC = () => {
  const { logout } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:8000/auth/logout").then(() => {
      logout();
      setTimeout(() => history.push({pathname: '/'}), 2000);
    });
  }, []);

  return (
    <div className="container">
      <h3>Logging you out.</h3>
    </div>
  );
};

export default LogoutPage;
