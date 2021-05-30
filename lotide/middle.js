
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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🤓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🤓 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/


const middle = function(arry) {
  let middleArry = [];
  if (arry.length <= 2) {
    return middleArry;
  }
  if (arry.length % 2 === 0) {
    middleArry.push(arry[Math.floor(arry.length / 2) - 1], arry[Math.floor(arry.length / 2)]);
      
  } else {
    middleArry.push(arry[Math.floor(arry.length / 2)]);
      
  }
  return middleArry;
};



console.log(middle([1, 2,6,4, 3,7, 3]));
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);
assertArraysEqual(middle([1,2,3,4,5,6]),[3,4]);



assertArraysEqual(middle([1, 2,6,4, 3,7, 3]),[4]);

