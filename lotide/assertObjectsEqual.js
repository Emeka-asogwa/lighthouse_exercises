

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

const eqObjects = function(object1, object2) {
  if (((Object.keys(object1)).length) !== ((Object.keys(object2)).length)) {
    return false;
  }
  for (let values of (Object.keys(object1))) {
    if (Array.isArray(object1[values])) {
      if (!eqArrays(object1[values], object2[values]))  {
        return false;
      }

    } else {
      if (object1[values] !== object2[values]) {
        return false;
      
      }
    }

  }
  return true;
};





const assertObjectsEqual = function(actual, expected) {
  const inspect = require(`util`).inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑🤓 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  console.log(`Example label: ${inspect(actual)}`);
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

assertObjectsEqual(ab,ba);






// const assertObjectsEqual = function(actual, expected) {
//   // Implement me!
// };






