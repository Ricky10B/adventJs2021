function countPackages(carriers, carrierID) {
  let arr = [carrierID];
  let cont = 0;
  while(arr.length > 0) {
    carriers.find(carrier => {
      if(arr.includes(carrier[0])) {
        cont += carrier[1];
        arr.push(carrier[2]);
        arr = arr
          .filter(a => a != carrier[0])
          .flat();
        return true;
      }
    });
  };
  return cont;
}

module.exports = countPackages
