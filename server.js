//to add express
const express = require('express');
//to instantiate the server
const app = express();
//requiring data from the animial.json file
const { animals } = require('./data/animals.json');

function filterByQuery(query, animalsArray) {
    let filteredResults = animalsArray;
    if (query.diet) {
      filteredResults = filteredResults.filter(animal => animal.diet === query.diet);
    }
    if (query.species) {
      filteredResults = filteredResults.filter(animal => animal.species === query.species);
    }
    if (query.name) {
      filteredResults = filteredResults.filter(animal => animal.name === query.name);
    }
    return filteredResults;
  }

//this is the get function that tells the client where to get the info and then what will happen once the info is gotten
app.get('/api/animals', (req, res) => {
    let results = animals;
    if (req.query) {
      results = filterByQuery(req.query, results);
    }
    res.json(results);
  });

//make our server listen for requests
app.listen(3001, () => {
console.log(`API server now on port 3001!`);
});

