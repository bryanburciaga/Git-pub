const express = require('express')
require('dotenv').config();
const port = process.env.port;
const drinks = require('./models/drinks');
console.log('this is drinks inside of drinks.js', drinks);