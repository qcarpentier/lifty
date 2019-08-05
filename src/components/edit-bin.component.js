import React, { Component } from "react";
import axios from "axios";

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeBinType = this.onChangeBinType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      binType: "",
      location: null,
      fillPercentage: ""
    };
  }

  componentDidMount() {
    // Load the bin (get the id from the URL)
    axios
      .get("http://localhost:5000/bins/" + this.props.match.params.id)
      .then(response => {
        this.setState({
          name: response.data.name,
          binType: response.data.binType,
          location: response.data.location,
          fillPercentage: response.data.fillPercentage
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeBinType(e) {
    this.setState({
      binType: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const bin = {
      name: this.state.name,
      binType: this.state.binType,
      location: this.state.location,
      fillPercentage: this.state.fillPercentage
    };

    console.log(bin);

    axios
      .post(
        "http://localhost:5000/bins/update/" + this.props.match.params.id,
        bin
      )
      .then(res => console.log(res.data));

    window.location = "/";
  }

  render() {
    return (
      <div className="container">
        <h3>Modifier une poubelle</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nom: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
            />
          </div>
          <div className="form-group">
            <label>Type: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.binType}
              onChange={this.onChangeBinType}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Valider"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
