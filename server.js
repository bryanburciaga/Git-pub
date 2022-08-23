// dependencies
const express = require('express');
const port = 3000;

const app = express();

app.get('/drinks', (req, res) => {
    res.send('Welcome to the Gitpub App!');
});

app.listen(port, () => {
    console.log(`Im in port ${port}.`);
});