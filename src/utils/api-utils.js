export const parseCSV = (data) => {
  let [, ...csvData] = data.split("\n").filter((row) => row.length > 0);
  csvData = csvData.map((d) => d.replace(/"/g, "").split(","));

  return csvData;
};
