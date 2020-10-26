import React from "react";

import DropDown from "../DropDown";
import FilterManager from "./FilterManager";
import "./styles.scss";

const Filter = () => {
  const {
    data: { getFilterableData },
  } = FilterManager();

  return (
    <section className="filter">
      <i className="icon-equalizer filter__icon-setting" />

      <div className="filter__drop-down-container">
        {Object.entries(getFilterableData).map(
          ([filtersetLabel, filterable]) => (
            <DropDown
              key={filtersetLabel}
              label={filtersetLabel}
              dataset={filterable}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Filter;
