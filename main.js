const express = require('express');
const app = express();
const ejs = require('ejs');
const fs = require('fs');

const person = {
    name: 'Cristian Francolino'
};

app.get('/', (req, res) => {
    const data = {
        person: person
    };
    ejs.renderFile('public/index.ejs', data, {}, (err, html) => {
        res.send(html);
    });
})

app.listen(3000, () => {
    console.log('Server running on port 3000');
})