import React from "react";
import Logo from "../Logo";
import Filter from "../Filter";
import PieChart from "../PieChart";

import "./styles.scss";

const Navigation = () => {
  return (
    <article className="container">
      <section className="navigation">
        <Logo />
        <Filter />
        <PieChart />
      </section>
    </article>
  );
};

export default Navigation;
