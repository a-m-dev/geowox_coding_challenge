import React from "react";
import Logo from "../Logo";
import Filter from "../Filter";
import PieChart from "../PieChart";

import "./styles.scss";

const Navigation = () => {
  return (
    <section className="navigation">
      <Logo />
      <Filter />
      <PieChart />
    </section>
  );
};

export default Navigation;
