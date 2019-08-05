import React from 'react'
import L from 'leaflet';
import { Map, Marker, Popup, Polygon, TileLayer } from 'react-leaflet';

const BinsMap = (props) => {
    return (
      <Map center={props.mapCenter} zoom={props.mapZoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polygon positions={props.polygonPositions} />
        <Marker position={props.markerPosition}>
          <Popup>
            Lifty!
          </Popup>
        </Marker>
      </Map>
    );
}

export default BinsMap;
