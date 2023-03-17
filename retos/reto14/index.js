function missingReindeer(ids) {
  let res = ids
    .sort((a,b) => a-b)
    .slice(1)
    .find((id, i) => id-1 != ids[i]);
  if(!ids.includes(0)) return 0;
  return !res ? ++ids[ids.length-1] : res-1
}

module.exports = missingReindeer
