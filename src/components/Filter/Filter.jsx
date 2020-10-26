import React from "react";

import Loading from "../Loading";
import DropDown from "../DropDown";
import FilterManager from "./FilterManager";

import "./styles.scss";

const Filter = () => {
  const {
    data: { isLoading, getFilterableData, shouldShowFilterError },
    actions: { handleClearFilters },
  } = FilterManager();

  return (
    <section className={`filter ${shouldShowFilterError && "filter--errored"}`}>
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

      <i
        className="icon-cancel filter__icon-cancel"
        onClick={handleClearFilters}
      />

      <div className="filter__error-note">
        <span>
          <em>No Property found!</em>
          <em>Currently showing all</em>
          <em>Try a different Search config</em>
        </span>
        <span></span>
      </div>

      <Loading shouldVisible={isLoading} />
    </section>
  );
};

export default Filter;
