export const formatCard = (address) => {
  let addressFormatted;
  if (address) {
    addressFormatted = address.slice(0, -35);
  } else {
    addressFormatted = "---";
  }
  return addressFormatted;
};
