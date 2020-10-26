import React from "react";
import Swiper from "react-id-swiper";

import PropertyItem from "../PropertyItem";

import "./styles.scss";
import PropertyListManager from "./PropertyListManager";

const PropertyList = () => {
  const {
    data: { getHeading, getPropertiesData },
  } = PropertyListManager();

  const params = {
    slidesPerView: 3,
    spaceBetween: 30,
  };

  return (
    <article className="container">
      <section className="property-list">
        <h3 className="property-list__heading">{getHeading}</h3>

        <Swiper {...params}>
          {getPropertiesData.length > 0 &&
            getPropertiesData.map((item, i) => (
              <div key={i} className="property-list__item">
                <PropertyItem {...item} />
              </div>
            ))}
        </Swiper>
      </section>
    </article>
  );
};

export default PropertyList;
