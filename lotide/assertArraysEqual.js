const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🤓 Assertion Failed: ${actual} !== ${expected}`);
  }
};





const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🤓 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let value = 0; value < actual.length; value++) {
    if (actual[value] !== expected[value]) {
      return false;
    }
  }
  return true;
};




assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // false

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);