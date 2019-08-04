import React from "react";
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import BinsList from "./components/bins-list.component";
import EditBin from "./components/edit-bin.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={BinsList} />
        <Route path="/edit/:id" component={EditBin} />
      </div>
    </Router>
  );
}

export default App;
