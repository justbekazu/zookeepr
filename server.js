//to add express
const express = require('express');
//to instantiate the server
const app = express();
//requiring data from the animial.json file
const { animal } = require('./data/animal.json');

//this is the get function that tells the client where to get the info and then what will happen once the info is gotten
 app.get('/api/animal', (req, res) => {
 res.send('Hello!');
 });

//make our server listen for requests
app.listen(3001, () => {
console.log(`API server now on port 3001!`);
});

