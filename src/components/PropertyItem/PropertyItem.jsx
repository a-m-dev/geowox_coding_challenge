import React, { useMemo } from "react";
import { PROPERTY_TYPES } from "constants/PropertyTypes";
import { PropertyImagesMap } from "constants/PropertyImagesMap";
import { useGlobalContext } from "containers/App/context";

import "./styles.scss";

const PropertyItem = ({
  id,
  sqm,
  lat,
  lon,
  beds,
  baths,
  price,
  address,
  propertyType,
  satelliteImage,
}) => {
  const {
    actions: { handleItemMouseEnter, handleItemMouseLeave },
  } = useGlobalContext();

  const iterableDescriptions = useMemo(() => {
    return [
      { id: 1, icon: "icon-layers", value: PROPERTY_TYPES[propertyType] },
      { id: 2, icon: "icon-bed", value: beds },
      { id: 3, icon: "icon-shower", value: baths },
      { id: 4, icon: "icon-resize-full", value: sqm },
    ];
  }, [sqm, beds, baths, propertyType]);

  return (
    <section
      className="property-item"
      onMouseEnter={() => handleItemMouseEnter({ lat, lon })}
      onMouseLeave={handleItemMouseLeave}
    >
      <a href={satelliteImage} target="_blank">
        <div className="property-item__cover">
          <img src={PropertyImagesMap.get(id)} alt="sqm" />
          <div className="property-item__cover-address">
            <i className="icon-map-signs" />
            <p>{address}</p>
          </div>
        </div>
        <div className="property-item__des">
          {iterableDescriptions.map(({ id, icon, value }) => (
            <section key={id} className="property-item__des-item">
              <i className={icon} />
              <span>{value || "-"}</span>
            </section>
          ))}
        </div>

        <div className="property-item__price">
          <span>$ {price ? Number(price).toLocaleString() : "-"}</span>
        </div>
      </a>
    </section>
  );
};

export default PropertyItem;
