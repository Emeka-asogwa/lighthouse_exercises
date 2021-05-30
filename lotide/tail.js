const assertEqual = function(actual, expected) {
  //let equal = true;
  for (let i = 0; i < actual.length; i++) {

    if (actual[i] !== expected[i]) {
      console.log(`🛑🛑🛑🤓 Assertion Failed: ${actual} !== ${expected}`);
      //equal = false;
      return false;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  return true;
};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1,1);

const head = function(arr) {
  return arr[0];
};

const tail = function(arr) {
  let arrt = [];
  for (let i = arr.length - 1; i > 0; i--) {

    arrt.push(arr[i]);


  } return arrt.reverse();
};

//console.log(tail([2,3, 4,5]))
//tail([2,3])
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!