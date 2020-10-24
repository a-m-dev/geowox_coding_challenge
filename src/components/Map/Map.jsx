import React from "react";
import ReactMapboxGL from "react-mapbox-gl";
import Marker from "../Marker";

import "./styles.scss";
import MapManager from "./MapManager";

const MapInstance = ReactMapboxGL({
  accessToken: process.env.REACT_APP_MAPBOX_GL_ACCESS_TOKEN,
});

const Map = () => {
  const {
    data: { mapCenter, mapZoomLevel, propertyMarkersLocation },
    actions: { handleActiveMarker, handleMapZoom },
  } = MapManager();

  return (
    <article className="map">
      <MapInstance
        center={mapCenter}
        zoom={mapZoomLevel}
        className="map__container"
        style={process.env.REACT_APP_MAPBOX_GL_STYLE}
        onZoom={handleMapZoom}
      >
        {!!propertyMarkersLocation &&
          propertyMarkersLocation.map((marker, i) => (
            <Marker
              key={i}
              markerLocation={marker}
              handleActiveMarker={handleActiveMarker}
            />
          ))}
      </MapInstance>
    </article>
  );
};

export default Map;
