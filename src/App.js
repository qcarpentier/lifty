import React from "react";
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BinsList from "./components/bins-list.component";
import EditBin from "./components/edit-bin.component";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faTimesCircle, faListUl, faBan, faPen, faRecycle, faDumpster, faLink } from '@fortawesome/free-solid-svg-icons';

library.add(faBell, faTimesCircle, faListUl, faBan, faPen, faRecycle, faDumpster, faLink);

function App() {
  return (
    <Router>
      <div className="container-fullwidth">
        <Navbar />
        <br />
        <Route path="/" exact component={BinsList} />
        <Route path="/edit/:id" component={EditBin} />
      </div>
    </Router>
  );
}

export default App;
