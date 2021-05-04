const getToday = (today) => {
  const daily = [];
  [...Array(24).keys()].forEach((x) => {
    let temp = { index: x, datetime: new Date(today.setHours(x, 0, 0, 0)) };
    daily.push(temp);
  });
  return daily;
};

const addDay = (date, days) => new Date(date.setDate(date.getDate() + days));
const addHour = (date, hours) =>
  new Date(date.setTime(date.getTime() + hours * 60 * 60 * 1000));

export { getToday, addDay, addHour };
