// dependencies
const express = require('express');
const port = 3000;
// to read valus from .env files
//  and the process.env
const drinks = require('./models/drinks');
// console.log('this is drinks inside of drinks.js', drinks);

const app = express();

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', {drinks: drinks});
});

app.get('/drinks/:id', (req, res) => {
    const foundDrinks = drinks.find(function(f) {
        return f.id == req.params.id
    });
    res.render('drinks_show.ejs', {drink: foundDrinks});
});


app.listen(port, () => {
    console.log(`Im in port ${port}.`);
});