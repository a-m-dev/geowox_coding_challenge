import { useRef, useEffect } from "react";
import MapboxGL from "mapbox-gl";
import { useGlobalContext } from "containers/App/context";

const MapManager = () => {
  const MapRef = useRef(null);
  const {
    data: { mapCenter, mapZoomLevel },
  } = useGlobalContext();

  useEffect(() => {
    const {
      REACT_APP_MAPBOX_GL_STYLE,
      REACT_APP_MAPBOX_GL_ACCESS_TOKEN,
    } = process.env;

    MapboxGL.accessToken = REACT_APP_MAPBOX_GL_ACCESS_TOKEN;
    new MapboxGL.Map({
      container: MapRef.current,
      style: REACT_APP_MAPBOX_GL_STYLE,
      center: mapCenter,
      zoom: mapZoomLevel,
    });
  }, [MapRef, mapCenter, mapZoomLevel]);

  return {
    refs: { MapRef },
    data: {},
    actions: {},
  };
};

export default MapManager;
