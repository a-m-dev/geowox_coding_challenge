import React from "react";

import "./styles.scss";

const DropDown = () => {
  return (
    <article className="drop-down">
      <div className="drop-down__selection">
        <span className="drop-down__selection-label">Label</span>
        <p className="drop-down__selection-selected">Choose One</p>
        <i className="icon-down-open-mini" />
      </div>
    </article>
  );
};

export default DropDown;
