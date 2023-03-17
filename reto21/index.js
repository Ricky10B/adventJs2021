function canCarry(capacity, trip) {
  let regalos = 0;
  let viajes = Math.max(...trip.map(t => t[2]));
  let res = Array.from({ length: viajes+1 }, (_, i) => i)
    .some(ind =>
    trip.some(t => {
      if(t[1] == ind) {
        regalos += t[0];
        if(regalos > capacity) return true;
      }
      
      if(t[2] == ind) {
        regalos -= t[0]
      }
    })
  );
  return !res;
}

module.exports = canCarry
