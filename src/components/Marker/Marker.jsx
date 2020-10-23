import React from "react";
import { Marker as MAPBOX_Marker } from "react-mapbox-gl";

import "./styles.scss";

const Marker = ({ markerLocation, handleActiveMarker }) => {
  return (
    <MAPBOX_Marker
      coordinates={markerLocation}
      tabIndex="1000"
      anchor="bottom"
      onClick={() => handleActiveMarker(markerLocation)}
    >
      <div className="marker-container">
        <i className="icon-location marker-container__icon" />
      </div>
    </MAPBOX_Marker>
  );
};

export default Marker;
