const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

const findKeyByValue = function(object, value) {
  for (const objectKey of Object.keys(object)) {
    if (object[objectKey] === value) {
      //console.log(object[value]);
      return objectKey;
    }
  }
};


console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
/// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);