import React from "react";
import ReactMapGL from "react-map-gl";

import "./styles.scss";
import MapManager from "./MapManager";

const Map = () => {
  const {
    data: { mapViewport },
    env: { MAPBOX_GL_STYLE, MAPBOX_GL_ACCESS_TOKEN },
    actions: { handleVieportChange },
  } = MapManager();

  return (
    <article className="map">
      <ReactMapGL
        {...mapViewport}
        mapStyle={MAPBOX_GL_STYLE}
        onViewportChange={handleVieportChange}
        mapboxApiAccessToken={MAPBOX_GL_ACCESS_TOKEN}
      />
    </article>
  );
};

export default Map;
