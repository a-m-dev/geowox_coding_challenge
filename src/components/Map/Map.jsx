import React from "react";

import "./styles.scss";
import MapManager from "./MapManager";

const Map = () => {
  const {
    refs: { MapRef },
  } = MapManager();

  return (
    <article className="map">
      <div className="map__container" ref={MapRef} />
    </article>
  );
};

export default Map;
