import React, { Component } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

const Bin = props => (
  <tr>
    <td>{props.bin.name}</td>
    <td>{props.bin.binType}</td>
    <td>{props.bin.fillPercentage}%</td>
    <td>{props.bin.location.coordinates[0]}</td>
    <td>{props.bin.location.coordinates[1]}</td>
    <td>
      <Link to={"/edit/" + props.bin._id}>Modifier</Link> | {" "}
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
        <Bin
          bin={currentBin}
          deleteBin={this.deleteBin}
          key={currentBin._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h3>Liste des poubelles</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Nom</th>
              <th>Type</th>
              <th>Remplissage</th>
              <th>Longitude</th>
              <th>Latitude</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.binList()}</tbody>
        </table>
      </div>
    );
  }
}
