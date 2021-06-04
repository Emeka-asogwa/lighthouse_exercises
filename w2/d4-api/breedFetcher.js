const request = require('request');
const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      // console.log(`Error:`, error);
      callback(error, null);
    }
    const catObj = JSON.parse(body);
    if (catObj.length == 0) {
      callback(null, "Invalid cat breed");
      //console.log('Invalid cat breed');
    } else {
      callback(null,catObj[0].description);
      //console.log(catObj);
      //console.log(catObj[0].description);
    }

  });
};

module.exports = { fetchBreedDescription };