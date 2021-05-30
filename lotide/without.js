const without = function(array1, array2) {
  let newArray = [];
  for(const value of array1){
    if(!array2.includes(value)){
      newArray.push(value);
    }
  }
  return newArray; 
}; 



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

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);