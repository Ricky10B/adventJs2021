function pangram(letter) {
  const str = 'áäa b c d éëe f g h íïi j k l m n ñ óöo p q r s t úüu v w x y z';
  return str.split(" ").every(st => {
    return st.split("").some(s => letter.toLowerCase().includes(s));
  });
}

module.exports = pangram
