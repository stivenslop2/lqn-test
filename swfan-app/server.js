const path = require('path');
const express = require('express');
const app = express(); // create express app


const bodyParser = require('body-parser');
app.use(bodyParser.json());

// add middlewares
const root = require('path').join(__dirname, 'build');
app.use(express.static(root));

app.use('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// start express server on port 5001
app.listen(process.env.PORT || 5001, () => {
  console.log('server started');
});