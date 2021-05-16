export const formatMoney = (number, digits) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits === undefined ? 2 : digits,
  });
  return formatter.format(number);
};

export const formatViews = (number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
  });
  return formatter.format(number);
};
