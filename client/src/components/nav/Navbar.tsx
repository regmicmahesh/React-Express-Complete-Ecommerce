import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
  const { isLoggedIn, username } = useContext(UserContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        PASAL
      </a>
      <button
        className="navbar-toggler"
        data-toggle="collapse"
        data-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavItem text="Home" to="/" />
          {!isLoggedIn && (
            <>
              <NavItem text="Login" to="/login" />
              <NavItem text="Register" />
            </>
          )}
        </ul>
        {isLoggedIn && (
          <ul className="navbar-nav ml-auto">
            <NavItem text={username} to="/" />
            <NavItem text="Logout" to="/logout" />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
