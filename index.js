const addDays = require("date-fns/addDays");

function getDateAfterXDays(days) {
  let currDate = new Date(2020, 07, 22);
  let newDate = addDays(currDate, days);

  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`;
}

module.exports = getDateAfterXDays;
