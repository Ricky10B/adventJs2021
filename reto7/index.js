function contains(store, product) {
  let res = Object.values(store);
  let exist = true;
  while(exist) {
    res = res.map(v => {
      if(typeof v == 'object') {
        v = Object.values(v);
      }
      return v;
    }).flat();
    exist = res.find(v => typeof v == 'object');
  };
  return res.includes(product);
}

module.exports = contains
