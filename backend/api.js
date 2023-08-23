// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mock = require("./mock-data");
console.log(mock)


const app = express();


// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// enabling CORS for all requests
app.use(cors());


// defining an endpoint to return all ads
app.get('/users', (req, res) => {
  res.send(JSON.stringify(mock));
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});