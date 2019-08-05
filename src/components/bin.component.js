import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Bin extends Component {
  buildPercentageStyle = (level, color, fontWeight) => {
    return {
      level: level,
      color: color,
      fontWeight: fontWeight
    };
  };

  render() {
    let fillPercentageStyle;

    if (this.props.bin.fillPercentage >= 90) {
      fillPercentageStyle = this.buildPercentageStyle("🚨", "red", 800);
    } else if (this.props.bin.fillPercentage >= 80) {
      fillPercentageStyle = this.buildPercentageStyle("⚠️", "orange", 700);
    } else {
      fillPercentageStyle = this.buildPercentageStyle("✔️", "green", 600);
    }

    return (
      <tr>
        <td className="align-middle">{fillPercentageStyle.level}</td>
        <td className="align-middle">{this.props.bin.name}</td>
        <td className="align-middle">{this.props.bin.binType}</td>
        <td className="align-middle" style={fillPercentageStyle}>
          {this.props.bin.fillPercentage}%
        </td>
        <td className="align-middle">
          <button
            href="/"
            onClick={() => {
              if (window.confirm("Voulez-vous renvoyer une notification?"))
                window.alert("Notification envoyée à l'équipe la plus proche.");
            }}
            type="button"
            className="btn btn-outline-info"
          >
            <FontAwesomeIcon icon="bell" />
          </button>{" "}
          <Link to={"/edit/" + this.props.bin._id}>
            <button type="button" className="btn btn-outline-secondary">
              <FontAwesomeIcon icon="pen" />
            </button>
          </Link>{" "}
          <button
            href="/"
            onClick={() => {
              if (
                window.confirm(
                  "Êtes-vous sûr de vouloir supprimer cette poubelle?"
                )
              )
                this.props.deleteBin(this.props.bin._id);
            }}
            type="button"
            className="btn btn-outline-danger"
          >
            <FontAwesomeIcon icon="times-circle" />
          </button>
        </td>
      </tr>
    );
  }
}
