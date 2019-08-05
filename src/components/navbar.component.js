import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-lg sticky-top">
        <Link to="/" className="navbar-brand">
            <FontAwesomeIcon icon="recycle" /> Lifty <sub>BETA</sub>
          <div className="navbar-title">
          </div>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto pull-righ">
            <li className="navbar-item px-3 float-right">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon="list-ul" /> Poubelles
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                <FontAwesomeIcon icon="link" /> Lier une poubelle
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
