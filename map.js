const words = ["checker", "metasploit", "to", "proto", "vuln"];

const map = (array, callback) => {
  const results = [];
  for (const word of array) {
    results.push(callback(word));
  }
  return results;
};

const assertArraysEqual = (a1, b1) => {
  if (eqArrays(a1, b1)) {
    console.log(`✅ Assertion Passed: ${a1} === ${b1}`);
  } else {
    console.log(`🛑 Assertion Failed: ${a1} !== ${b1}`);
  };
};

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

// //test code// 

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word.length)

assertArraysEqual(results1, ['c', 'm', 't', 'p', 'v']);

assertArraysEqual(results2, [7, 10, 2, 5, 4]);