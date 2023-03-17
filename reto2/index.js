function listGifts(letter) {
  const obj = {}
  letter
    .replaceAll("  ", " ")
    .split(" ")
    .filter(regalo => !regalo.startsWith("_"))
    .filter(regalo => regalo.trim() != '')
    .forEach(letter => {
      if(obj[letter]) {
        obj[letter]++;
        return;
      }
      obj[letter] = 1
    });
  return obj;
}

module.exports = listGifts;