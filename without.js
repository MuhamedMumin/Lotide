
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
      return false;
  }
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  return true;
};
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
      console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
      console.log(`❌ Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

function without(source, itemsToRemove) {
  return source.filter(item => !itemsToRemove.includes(item));
}

const originalArray = [1, 2, 3];
const removedItems = [1];
const newArray = without(originalArray, removedItems);

assertArraysEqual(originalArray, [1, 2, 3]);

