'use strict';

// variables... for express, bodyParser, pg...
const fs = require('fs');
const express = require('express');
const pg = require('pg');

const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000; // port souces localhost3000
const app = express(); // my app g.

const conString = 'postgres://localhost:5432/'; // it runs, but doesn't get...


// app.use(express.static('./js')); 

app.listen(PORT, function() {
  console.log(`Server started on port ${PORT}!`);
});
