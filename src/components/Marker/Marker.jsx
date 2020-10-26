import React, { useMemo } from "react";
import { Marker as MAPBOX_Marker } from "react-mapbox-gl";
import { useGlobalContext } from "containers/App/context";

import "./styles.scss";

const Marker = ({ markerLocation, handleActiveMarker }) => {
  const {
    data: { mapCenter },
  } = useGlobalContext();

  const isActivePin = useMemo(() => {
    if (
      mapCenter[0] === markerLocation[0] &&
      mapCenter[1] === markerLocation[1]
    )
      return true;
    else return false;
  }, [mapCenter, markerLocation]);

  return (
    <MAPBOX_Marker
      coordinates={markerLocation}
      tabIndex="1000"
      anchor="bottom"
      onClick={() => handleActiveMarker(markerLocation)}
    >
      <div className="marker-container">
        <i className="icon-location" />
        <span className={`pin normal ${isActivePin && "active"}`}>
          <span className="small-circle"></span>
          <span className="large-circle"></span>
          <span className="bubble"></span>
        </span>
      </div>
    </MAPBOX_Marker>
  );
};

export default Marker;
