export const randomNumGenerator = ({ min, max, boundary }) => {
  const random = Math.floor(Math.random() * (max - min + 1) + min);
  return random * boundary;
};
