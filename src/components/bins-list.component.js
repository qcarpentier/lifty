import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import BinsMap from "./bins-map.component";

const Bin = props => (
  <tr>
    <td>{props.bin.name}</td>
    <td>{props.bin.binType}</td>
    <td>{props.bin.fillPercentage}%</td>
    {/* <td>{props.bin.location.coordinates[0]}</td>
    <td>{props.bin.location.coordinates[1]}</td> */}
    <td>
      <Link to={"/edit/" + props.bin._id}>Modifier</Link> |{" "}
      <a
        href="/"
        onClick={() => {
          props.deleteBin(props.bin._id);
        }}
      >
        Supprimer
      </a>
    </td>
  </tr>
);

export default class BinsList extends Component {
  constructor(props) {
    super(props);

    this.deleteBin = this.deleteBin.bind(this);

    this.state = { bins: [] };
  }

  componentDidMount() {
    // Send a get request for loading the bins List
    Axios.get("http://localhost:5000/bins")
      .then(response => {
        this.setState({ bins: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteBin(id) {
    // Send a delete request
    Axios.delete("http://localhost:5000/bins/" + id).then(response =>
      console.log(response.data)
    );

    // Remove the bin of the list
    this.setState({
      bins: this.state.bins.filter(el => el._id !== id)
    });
  }

  // Display each bin of the list
  binList() {
    return this.state.bins.map(currentBin => {
      return (
        <Bin bin={currentBin} deleteBin={this.deleteBin} key={currentBin._id} />
      );
    });
  }

  render() {
    // Walibi positions (for test purpose only)
    const position = [50.699515, 4.591793];
    const mapZoom = 15;
    const polygonPositions = [
      [50.695634, 4.587268],
      [50.696116, 4.585798],
      [50.699186, 4.586385],
      [50.703261, 4.593157],
      [50.703856, 4.595329],
      [50.702711, 4.597201],
      [50.700715, 4.594889],
      [50.699220, 4.595264],
      [50.695900, 4.587977],
      [50.695634, 4.587268],
    ]

    return (
      <div className="container">
        <div>
          <h3>Liste des poubelles</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Nom</th>
                <th>Type</th>
                <th>Remplissage</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{this.binList()}</tbody>
          </table>
        </div>
        <div>
          <BinsMap
            mapCenter={position}
            mapZoom={mapZoom}
            markerPosition={position}
            polygonPositions={polygonPositions}
          />
        </div>
      </div>
    );
  }
}
