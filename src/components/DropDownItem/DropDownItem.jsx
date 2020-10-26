import React, { useCallback } from "react";
import { PROPERTY_TYPES } from "constants/PropertyTypes";
import "./styles.scss";

const DropDownItem = ({ id, label, isSelected, itemSelectHandler }) => {
  const handleSelectItem = useCallback(() => {
    itemSelectHandler(id);
  }, [id, itemSelectHandler]);

  return (
    <div
      className={`drop-down-item ${isSelected && "drop-down-item--selected"}`}
      onClick={handleSelectItem}
    >
      <span>{typeof label === "string" ? PROPERTY_TYPES[label] : label}</span>
      <i className="icon-ok" />
    </div>
  );
};

export default DropDownItem;
