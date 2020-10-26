import { useState, useCallback, useMemo } from "react";
import { PROPERTY_TYPES } from "constants/PropertyTypes";
import { useGlobalContext } from "containers/App/context";

const DropDownManager = ({ filterCategory, dataset }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const {
    data: { activeFilters },
    actions: { handleUpdateFilters },
  } = useGlobalContext();

  const handleSetSelectedItem = useCallback(
    (id) => {
      setSelectedItem(id);
      handleUpdateFilters({ filterCategory, id });
    },
    [filterCategory, selectedItem, setSelectedItem]
  );

  const getLabelById = useMemo(() => {
    const target = dataset.find((x) => x.id === selectedItem) || "";
    return typeof target?.data === "string"
      ? PROPERTY_TYPES[target.data]
      : target.data;
  }, [selectedItem]);

  return {
    data: { selectedItem, activeFilters, getLabelById },
    actions: { handleSetSelectedItem },
  };
};

export default DropDownManager;
