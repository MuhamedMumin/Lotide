const takeUntil = function (array, callback) {
  let result = [];
  for (let item of array) {
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }
  }
  return result;
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


// Test Code // 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", 'been', 'to', 'Hollywood']); // True 
console.log('---');
assertArraysEqual(takeUntil(data1, x => x < 0), [0, 1, 1, 0,]); // False 
console.log('---');
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]); // True