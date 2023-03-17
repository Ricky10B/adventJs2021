function wrapGifts(gifts) {
  let envoltura = gifts[0].length + 2;
  gifts = gifts.map(g => '*' + g + '*');
  gifts.unshift('*'.repeat(envoltura));
  gifts.push('*'.repeat(envoltura));
  return gifts;
}

module.exports = wrapGifts
