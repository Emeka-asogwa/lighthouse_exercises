
// for each method .....//

const findWaldo = function(names, found) {
  names.forEach(function(name, indx) {
    if (name === "Waldo") {
      found(name,indx);   // execute callback
    }

  });

};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], (foundName,index) => {
  console.log(`Found ${foundName} at index ${index}!`);
});









