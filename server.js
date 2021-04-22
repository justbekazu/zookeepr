//to add express
const express = require('express');
//to instantiate the server
const app = express();

//make our server listen for requests
app.listen(3001, () => {
    console.log(`API server now on port 3001!`);
  });

