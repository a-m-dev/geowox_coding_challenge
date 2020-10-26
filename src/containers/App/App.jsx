import React from "react";
import { Map, Navigation, PropertyList } from "components";

import AppManager from "./AppManager";
import { GlobalContext } from "./context";

import "./styles.scss";
import "swiper/swiper.scss";

const App = () => {
  const { data, actions } = AppManager();

  return (
    <GlobalContext.Provider value={{ data, actions }}>
      <article className="app">
        <Map />
        <Navigation />
        <PropertyList />
      </article>
    </GlobalContext.Provider>
  );
};

export default App;
