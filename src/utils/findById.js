export const findById = ({ dataset, targetId, key = "data" }) => {
  const target = dataset.find((x) => x.id === targetId) || {};
  return target[key] || null;
};
