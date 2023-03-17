function learn(time, courses) {
  let sum = [];
  courses.forEach((course, indice) => {
    courses.slice(indice+1).forEach((c, i) => {
      sum.push([indice, indice + i + 1, course + c])
    });
  });
  
  const res = sum
    .filter(s => s[2] <= time)
    .sort((a, b) => b[2]-a[2])[0]
  
  if(!res) return null;
  res.pop()
  return res;
}

module.exports = learn
