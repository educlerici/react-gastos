import React, { Component } from "react";

const Navbar = props => {
  return (
    <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
      <span className="navbar-brand mb-0 h1">{props.titulo}</span>
    </nav>
  );
};

export default Navbar;
