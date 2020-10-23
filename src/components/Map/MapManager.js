import { useState, useEffect, useCallback } from "react";
import { useGlobalContext } from "containers/App/context";

const MapManager = () => {
  const [mapViewport, setMapViewport] = useState({});

  const {
    REACT_APP_MAPBOX_GL_STYLE,
    REACT_APP_MAPBOX_GL_ACCESS_TOKEN,
  } = process.env;

  const {
    data: { isLoading, properties, mapCenter, mapZoomLevel },
  } = useGlobalContext();

  useEffect(() => {
    setMapViewport({
      width: "100vw",
      height: "100vh",
      latitude: mapCenter[1],
      longitude: mapCenter[0],
      zoom: mapZoomLevel,
    });
  }, [mapCenter, mapZoomLevel, setMapViewport]);

  const handleVieportChange = useCallback(
    (nextViewportConfig) => {
      setMapViewport(nextViewportConfig);
    },
    [setMapViewport]
  );

  return {
    data: { isLoading, properties, mapViewport },
    env: {
      MAPBOX_GL_STYLE: REACT_APP_MAPBOX_GL_STYLE,
      MAPBOX_GL_ACCESS_TOKEN: REACT_APP_MAPBOX_GL_ACCESS_TOKEN,
    },
    actions: { handleVieportChange },
  };
};

export default MapManager;
