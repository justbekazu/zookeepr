//to add express
const express = require('express');
//to instantiate the server
const app = express();
//requiring data from the animial.json file
const { animals } = require('./data/animal.json');

app.get('/api/animals', (req, res) => {
    res.send('Hello!');
  });

//make our server listen for requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

