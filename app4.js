const express = require('express');

const app = express();

app.get('/', (req, res, next)=> {
    res.status(200).send('<h1>Welcome!</h1>');
});

app.get('/about', (req, res, next)=> {
    res.status(200).send('<h1>aaaaaa</h1>');
});

app.listen(3000);