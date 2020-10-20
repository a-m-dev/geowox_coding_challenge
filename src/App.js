import React, { useRef, useEffect } from "react";
import * as mapboxgl from "mapbox-gl";

import "./App.scss";

function App() {
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiYW1kZXYiLCJhIjoiY2puYmtoeXI2MDJocTNwcDZqbGpjanJqbiJ9.VqFMjSdNzU9LfAgvH4Sxdw";
    new mapboxgl.Map({
      container: mapRef.current,
      style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
      center: [-6.1296182, 53.24705], // starting position [lng, lat]
      zoom: 13, // starting zoom
    });
  }, [mapRef]);

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-map-container" ref={mapRef}></div>
    </div>
  );
}

export default App;
