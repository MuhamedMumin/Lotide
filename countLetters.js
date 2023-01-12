const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  const counter = {}
  str.split('').forEach(letter => {
    counter[letter] = counter[letter] ? (counter[letter] + 1) : 1;
  });

  return counter;

}

console.log(countLetters('mumin'));