import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
  return (
    <div className="ui secondary pointing menu">
      <NavLink exact to="/" className="item" activeClassName="active">
        Home
      </NavLink>
      <NavLink to="/books" className="item" activeClassName="active">
        Books
      </NavLink>
      <NavLink to="/profile" className="item" activeClassName="active">
        Profile
      </NavLink>
    </div>
  );
};

export default NavBar;
