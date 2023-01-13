const eqObjects = function (obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } else {
    for (let i in obj1) {
      if (obj1[i] !== obj2[i]) {
        return false;
      }
    }
    return true;
  }
}



const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function (a1, b1) {
  if (a1.length !== a1.length) {
    return false;
  }
  for (let x = 0; x < a1.length; x++) {
    if (a1[x] !== b1[x]) {
      return false;
    }
  };
  return true;
};

// TEST CODE // 
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual((eqObjects(ab, ba)), true);////true 

const abc = { a: "1", b: "2", c: "3" };
assertEqual((eqObjects(ab, abc)), false); ///// false 