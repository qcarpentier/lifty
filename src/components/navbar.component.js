import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          <div className="navbar-title">Lifty<sup>beta</sup></div>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item px-3">
              <Link to="/" className="nav-link">
                Poubelles
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Lier une poubelle
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
