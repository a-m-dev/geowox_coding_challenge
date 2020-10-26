import propertyData from "./mock_data/properties.json";
import { randomNumGenerator } from "utils/randomNumGenerator";

const findProperties = ({ pt = null, bd = null, bth = null }) => {
  return new Promise((res, rej) => {
    try {
      const time = randomNumGenerator({ min: 1, max: 3, boundary: 1000 });

      let result = null;

      if (pt && bd && bth) {
        console.log(1);
        result = propertyData.filter(
          (item) =>
            item.propertyType === pt && item.beds === bd && item.baths === bth
        );
      }

      if (pt && bd && !bth) {
        console.log(2);
        result = propertyData.filter(
          (item) => item.propertyType === pt && item.beds === bd
        );
      }

      if (pt && bth && !bd) {
        console.log(3);
        result = propertyData.filter(
          (item) => item.propertyType === pt && item.baths === bth
        );
      }

      if (bd && bth && !pt) {
        console.log(4);
        result = propertyData.filter(
          (item) => item.beds === pt && item.baths === bth
        );
      }

      if (pt && !bd && !bth) {
        console.log(5);
        result = propertyData.filter((item) => item.propertyType === pt);
      }
      if (bd && !pt && !bth) {
        console.log(6);
        result = propertyData.filter((item) => item.beds === bd);
      }
      if (bth && !pt && !bd) {
        console.log(7);
        result = propertyData.filter((item) => item.baths === bth);
      }

      setTimeout(() => {
        if (!result.length) rej({ code: 404, message: "No Items" });
        res(result);
      }, time);
    } catch (e) {
      rej({ code: 400, message: "Bad Request", error: e });
    }
  });
};

export default findProperties;
