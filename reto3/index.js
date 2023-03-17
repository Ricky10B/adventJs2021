function isValid(letter) {
  if(letter.includes("()")) {
    return false
  }

  return letter
    .split("")
    .filter(l => !l.match(/[a-zÀ-ÿ|\s]/i))
    .join("")
    .split("()")
    .every(l => l == '')
}

module.exports = isValid
