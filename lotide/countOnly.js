const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑🤓 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1,1);

const countOnly = function(allItems, itemsToCount) {
  let obj = {};
  for (let item of allItems) {
    if (itemsToCount[item] === true) {
      if (obj[item]) {

        obj[item] += 1;
      } else {
        obj[item] = 1;
      }
    }

  }
  return obj;

};



/*
const countOnly = function (allItems, itemsToCount) {
  let obj = {};
  let check = [];
  let check2 = 0;
  for (keys in itemsToCount) {
    //console.log(itemsToCount[values])
    if (itemsToCount[keys] === true) {
      //console.log(values)
      for (valOfItems of allItems) {
        if (valOfItems === keys) {
          console.log(obj);
          if (obj[keys]) {
            obj[keys] +=1
          }
          else {
            obj[keys] = 1
          }

        }
      }

    }

  } return obj;
}
*/

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

/*
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
*/
