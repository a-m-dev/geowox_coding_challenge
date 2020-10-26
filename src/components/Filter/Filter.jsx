import React from "react";

import DropDown from "../DropDown";
import FilterManager from "./FilterManager";
import "./styles.scss";

const Filter = () => {
  const {
    data: {},
    actions: {},
  } = FilterManager();

  return (
    <section className="filter">
      <i className="icon-equalizer filter__icon-setting" />

      <div className="filter__drop-down-container">
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
    </section>
  );
};

export default Filter;
