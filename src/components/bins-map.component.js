import React, { Component } from "react";
import { Map, Marker, Popup, Polygon, TileLayer } from "react-leaflet";

export default class BinsMap extends Component {
  // Display all the located bins
  markerBinList() {
    return this.props.bins.map(currentBin => {
      const position = [
        currentBin.location.coordinates[0],
        currentBin.location.coordinates[1]
      ];

      return (
        <Marker position={position}>
          <Popup>{currentBin.name}</Popup>
        </Marker>
      );
    });
  }

  render() {
    return (
      <Map center={this.props.mapCenter} zoom={this.props.mapZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polygon positions={this.props.polygonPositions} />
        {this.markerBinList()}
      </Map>
    );
  }
}
