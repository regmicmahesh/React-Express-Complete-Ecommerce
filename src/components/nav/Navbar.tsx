import React from "react";
import NavItem from "./NavItem";

const Navbar: React.FC = () => {
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
          <NavItem text="Home" />
          <NavItem text="Login" />
          <NavItem text="Register" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
