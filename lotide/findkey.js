const findKey = function(object, callback) {
  for (let value in object) {
    if (callback(object[value])) {
      return value;
    }
  }
};
const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};

console.log(findKey(object, x => x.stars === 2));
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🤓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(findKey(object, x => x.stars === 2), "noma");