import { useState } from "react";
import { MAP_CONSTANTS } from "constants/MapConstants";

const AppManager = () => {
  const [mapCenter, setMapCenter] = useState(MAP_CONSTANTS.CENTER);
  const [mapZoomLevel, setMapZoomLevel] = useState(MAP_CONSTANTS.ZOOM_LEVEL);

  return {
    data: {
      mapCenter,
      mapZoomLevel,
    },
    actions: {
      setMapCenter,
      setMapZoomLevel,
    },
  };
};

export default AppManager;
