import React from "react";
import { Map, Navigation } from "components";

import AppManager from "./AppManager";
import { GlobalContext } from "./context";

import "./styles.scss";

const App = () => {
  const { data, actions } = AppManager();

  return (
    <GlobalContext.Provider value={{ data, actions }}>
      <article className="app">
        <Map />
        <Navigation />
      </article>
    </GlobalContext.Provider>
  );
};

export default App;
