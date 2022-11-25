const { fetchBreedDescription } = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

//https://github.com/eegyudt/json_the_cat
//SSH: git@github.com:eegyudt/json_the_cat.git