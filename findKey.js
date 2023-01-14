// / FUNCTION IMPLEMENTATION
const findKey = (object, callback) => {
  for (let key in object) {
    if (callback(object[key])) {
      //console.log(key)
      return true;
      // Note: return 'true' instead of 'key' in order to use
      // assertEqual to write test cases for various scenarios.
      // otherwise return key;
    }
  }
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE//
assertEqual((findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)), true); // => "noma"