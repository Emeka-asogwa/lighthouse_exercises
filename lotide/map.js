const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


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




assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // => true