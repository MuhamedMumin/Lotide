const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

function head(arr) {  //funtion return first integer of array
  return arr[0];
}
// Test case 1
assertEqual(head([5,6,7]), 5);
