import React from "react";
import GEOWOX_LOGO from "images/logo.svg";

import "./styles.scss";

const Logo = () => {
  return (
    <section className="logo-wrapper">
      <img src={GEOWOX_LOGO} alt="logo" className="logo-wrapper__img" />
      {/* <span className="logo-wrapper__divider" /> */}
      {/* <h3 className="logo-wrapper__heading">Coding Challenge</h3> */}
    </section>
  );
};

export default Logo;
