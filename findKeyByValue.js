const findKeyByValue = (object, value) => {
  const keySearch = Object.keys(object)
  for (const key of keySearch) {
    if ((object[key] === value)) {
      return key;
    }
  }
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

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertArraysEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);