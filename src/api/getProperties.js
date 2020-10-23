import propertyData from "./mock_data/properties.json";
import { randomNumGenerator } from "utils/randomNumGenerator";

const getProperties = () => {
  return new Promise((res, rej) => {
    try {
      const time = randomNumGenerator({ min: 1, max: 3, boundary: 1000 });

      setTimeout(() => {
        res(propertyData);
      }, time);
    } catch (e) {
      rej({ code: 400, message: "Bad Request", error: e });
    }
  });
};

export default getProperties;
