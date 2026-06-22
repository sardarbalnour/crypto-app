const convertData = (data, type) => {
  const convetedData = data[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });

  return convetedData;
};

export { convertData };
