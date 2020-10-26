import React, { useMemo } from "react";

import "./styles.scss";

const Loading = ({ shouldVisible }) => {
  const getClassName = useMemo(() => {
    let result = "loading";
    if (shouldVisible) result += " loading--visible";

    return result;
  }, [shouldVisible]);

  return (
    <section className={getClassName}>
      <span></span>
      <span></span>
      <span></span>
    </section>
  );
};

export default Loading;
