function daysToXmas(date) {
  let xmas = new Date("Dec 25, 2021").getTime();
  let fecha = new Date(date).getTime();
  let mls = 1000 * 60 * 60 * 24;
  return Math.ceil((xmas - fecha) / mls);
}

module.exports = daysToXmas
