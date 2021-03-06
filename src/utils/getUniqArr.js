export const getUniqArr = ({ dataset, key }) => {
  return (
    [...new Set(dataset.map((item) => item[key]))]
      .filter(Boolean)
      .map((item, idx) => ({ id: idx + 1, data: item })) || []
  );
};
