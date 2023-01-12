const letterPositions = function (sentence) {
  let results = {};
  let counter = -1;

  for (const char of sentence) {
    if (char !== " ") {
      if (results[char]) {
        counter++;
        results[char].push(counter);
      } else {
        counter++;
        results[char] = [counter];
      }
    } else {
      counter++;
    }

  }
  // console.log(results)
  return results;

}

const eqArrays = (a1, b1) => {
  if (a1.length !== b1.length) {
    return false;
  }
  for (let x = 0; x < a1.length; x++) {
    if (a1[x] !== b1[x]) {
      return false;
    }
  };
  return true;
};

const assertArraysEqual = (a1, b1) => {
  if (eqArrays(a1, b1)) {
    console.log(`✅ Assertion Passed: ${a1} === ${b1}`);
  } else {
    console.log(`🛑 Assertion Failed: ${a1} !== ${b1}`);
  };
};