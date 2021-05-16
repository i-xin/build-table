import { formatMoney, formatViews } from "./formatter";

// Common utils
const setSpendViews = (map, key, spend, views) => {
  if (map.has(key)) {
    const dataMap = map.get(key);
    dataMap.set("spend", dataMap.get("spend") + parseFloat(spend));
    dataMap.set("views", dataMap.get("views") + parseInt(views));
  } else {
    const dataMap = new Map();
    dataMap.set("spend", parseFloat(spend));
    dataMap.set("views", parseInt(views));
    map.set(key, dataMap);
  }
};

const getData = (map, type) => {
  const data = [];
  for (let [name, dataMap] of map.entries()) {
    const entry = {
      key: name.toLowerCase(),
      [type]: name,
      spend: formatMoney(dataMap.get("spend")),
      views: formatViews(dataMap.get("views")),
      cpv: formatMoney(dataMap.get("spend") / dataMap.get("views"), 2),
    };
    data.push(entry);
  }
  return data;
};

// Utils for summary
export const getSummaryItems = (spotsData) => {
  const totalSpots = spotsData.length;
  const totalSpend = spotsData.reduce((accu, prev) => {
    return accu + parseFloat(prev[3]);
  }, 0);
  const totalViews = spotsData.reduce(
    (accu, prev) => accu + parseInt(prev[4]),
    0
  );
  return [
    {
      name: "Total Spots",
      value: totalSpots,
    },
    {
      name: "Total Spend",
      value: formatMoney(totalSpend, 0),
    },
    {
      name: "Total Views",
      value: formatViews(totalViews),
    },
  ];
};

// Utils for creative data table
export const creativeHeaders = [
  {
    key: "creative",
    value: "Creative",
  },
  {
    key: "spend",
    value: "Spend",
  },
  {
    key: "views",
    value: "Views",
  },
  {
    key: "cpv",
    value: "CPV",
  },
];

export const getCreativeData = (spotsData) => {
  let creativeMap = new Map();
  for (let spot of spotsData) {
    const spotName = spot[2];
    setSpendViews(creativeMap, spotName, spot[3], spot[4]);
  }

  const creativeData = getData(creativeMap, "creative");
  creativeData.sort((a, b) => a.creative.localeCompare(b.creative));

  return creativeData;
};

// Utils for day data
export const dayHeaders = [
  {
    key: "day",
    value: "Day - Rotation",
  },
  {
    key: "spend",
    value: "Spend",
  },
  {
    key: "views",
    value: "Views",
  },
  {
    key: "cpv",
    value: "CPV",
  },
];

const getRotations = (timeSlot, rotationsData) => {
  const result = [];
  const todayDate = new Date().toISOString().split("T")[0];

  for (let rotation of rotationsData) {
    const [current, start, end] = [timeSlot, rotation[0], rotation[1]].map(
      (time) => new Date(`${todayDate} ${time}`)
    );

    if (current >= start && current <= end) {
      result.push(rotation[2]);
    }
  }
  return result;
};
export const getDayData = (rotationsData, spotsData) => {
  const dayMap = new Map();

  for (let spot of spotsData) {
    const timeSlot = spot[1];
    const rotations = getRotations(timeSlot, rotationsData);
    for (let rotation of rotations) {
      const day = `${spot[0]} ${rotation.toUpperCase()}`;
      setSpendViews(dayMap, day, spot[3], spot[4]);
    }
  }
  // No sorting for day as mockup
  return getData(dayMap, "day");
};
