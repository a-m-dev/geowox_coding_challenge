import React from "react";
import DropDownItem from "../DropDownItem";
import "./styles.scss";
import DropDownManager from "./DropDownManager";

const DropDown = ({ label, dataset }) => {
  const {
    data: { selectedItem, getLabelById },
    actions: { handleSetSelectedItem },
  } = DropDownManager({ filterCategory: label, dataset });

  return (
    <article className="drop-down">
      <div className="drop-down__selection">
        <span className="drop-down__selection-label">{label}</span>
        <p className="drop-down__selection-selected">
          {getLabelById || "Choose One"}
        </p>
        <i className="icon-down-open-mini" />
      </div>
      <section className="drop-down__list">
        {dataset.map(({ id, data }) => (
          <DropDownItem
            key={id}
            id={id}
            label={data}
            isSelected={selectedItem === id}
            itemSelectHandler={handleSetSelectedItem}
          />
        ))}
      </section>
    </article>
  );
};

export default DropDown;
