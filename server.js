const express = require('express')
const port = 3000;
const drinks = require('./models/drinks');
const food = require('./models/foods');
// console.log('this is drinks inside of drinks.js', drinks);
const app = express();

app.get('/drinks', (req, res) => {
    res.render('drinks_index.ejs', { 
        drinks: drinks,
        food: food});
});

app.get('/drinks/:id', (req, res) => {
    const foundFood = food.find(f => f.id == req.params.id);
    const foundDrink = drinks.find(f => f.id == req.params.id);
    res.render('drinks_show.ejs', { 
        drink: foundDrink, 
        food: foundFood,
    });
    // render automatically looks inside of folder named views at the root of out app

});

app.listen(port, () => {
console.log(`Port its listening on ${port}`);
});

