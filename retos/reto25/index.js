function canMouseEat(direction, game) {
  let n1 = null;
  let n2 = null;
  game.find((gam, ind) => {
    n2 = gam.join("").indexOf("m");
    if(n2 !== -1) {
        n1 = ind;
        return true;
    }
  });

  if(direction == 'up' && n1 > 0) n1 -= 1;
  if(direction == 'down' && n1 < game.length - 1) n1++;
  if(direction == 'left' && n2 > 0) n2 -= 1;
  if(direction == 'right' && n2 < game[0].length - 1) n2++;
    
  return game[n1][n2] == '*';
}

module.exports = canMouseEat
