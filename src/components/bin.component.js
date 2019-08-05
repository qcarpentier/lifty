import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Bin extends Component {
  render() {
    let fillLevel;
    let fillColor;
    let fillFontWeight;

    if (this.props.bin.fillPercentage >= 90) {
      fillLevel = "🚨";
      fillColor = "red";
      fillFontWeight = 800;
    } else if (this.props.bin.fillPercentage >= 80) {
      fillLevel = "⚠️";
      fillColor = "orange"
      fillFontWeight = 700;
    } else {
      fillLevel = "✔️";
      fillColor = "green";
      fillFontWeight = 600;
    }

    const fillPercentageStyle = {
        color: fillColor,
        fontWeight: fillFontWeight
    }

    return (
      <tr>
        <td className="align-middle">{fillLevel}</td>
        <td className="align-middle">{this.props.bin.name}</td>
        <td className="align-middle">{this.props.bin.binType}</td>
        <td className="align-middle" style={fillPercentageStyle}>{this.props.bin.fillPercentage}%</td>
        <td className="align-middle">
          <Link to={"/edit/" + this.props.bin._id}>
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon="pen" size="md" />
            </button>
          </Link>{" "}
          <button
            href="/"
            onClick={() => {
              this.props.deleteBin(this.props.bin._id);
            }}
            type="button"
            className="btn btn-outline-danger"
          >
            <FontAwesomeIcon icon="ban" size="md" />
          </button>
        </td>
      </tr>
    );
  }
}
