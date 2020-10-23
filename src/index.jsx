import React from "react";
import ReactDOM from "react-dom";
import App from "containers/App";

import "mapbox-gl/dist/mapbox-gl.css";
import "./globalStyles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
