'use strict';

const express       = require('express');
const cors          = require('cors');
const consign       = require('consign');
var logger          = require('morgan');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

consign().include('./src/routes').into(app);

app.listen(3001, function () {
    console.log('http://localhost:' + this.address().port); 
});

module.exports = app;