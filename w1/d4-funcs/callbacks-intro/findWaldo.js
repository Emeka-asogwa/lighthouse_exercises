// The second argument/parameter is expected to be a (callback) function
/*
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found(name,i);   // execute callback
    }
  }
};

const actionWhenFound = function(foundName, index) {
  console.log(`Found ${foundName} at index ${index}!`);
};

console.log(findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound));

*/

// for each method .....//

const findWaldo = function(names, found) {
  names.forEach(function(name, indx) {
    if (name === "Waldo") {
      found(name,indx);   // execute callback
    }

  });

};

const actionWhenFound = function(foundName, index) {
  console.log(`Found ${foundName} at index ${index}!`);
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);









