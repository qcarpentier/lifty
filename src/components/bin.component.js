import React from 'react';
import { Link } from "react-router-dom";

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

  export default Bin;