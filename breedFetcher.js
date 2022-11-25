//breedFetcher.js
const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const page = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(page, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (!data.length) {
      // console.log(`${breed} breed cannot be found in the database!`);
      return callback('no data found', null);
    }

    // console.log(`${breed} breed cannot be found in the database!`);
    const description = data[0]['description'];
    return callback(null, description);

  });
};

module.exports = { fetchBreedDescription };


//HTTPS: https://github.com/eegyudt/json_the_cat
//SSH: git@github.com:eegyudt/json_the_cat.git