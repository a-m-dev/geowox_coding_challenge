import { useMemo, useCallback } from "react";
import { useGlobalContext } from "containers/App/context";

const MapManager = () => {
  const {
    data: { isLoading, properties, mapCenter, mapZoomLevel },
    actions: { setMapCenter, setMapZoomLevel },
  } = useGlobalContext();

  const propertyMarkersLocation = useMemo(() => {
    return properties.map(({ lat, lon }) => [lon, lat]);
  }, [properties]);

  const handleActiveMarker = useCallback((args) => {
    setMapCenter(args);
    setMapZoomLevel([16]);
  }, []);

  return {
    data: {
      isLoading,

      properties,
      mapCenter,
      mapZoomLevel,
      propertyMarkersLocation,
    },
    actions: { handleActiveMarker },
  };
};

export default MapManager;
