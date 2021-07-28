/* eslint-disable no-plusplus */
/* Router */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    for (let i = 0; i <= 10; i++) {
        if (i === 5) {
            next('there was an error!');
        } else {
            res.write('a');
        }
    }
    res.end();
});

// 404 error handler
app.use((req, res, next) => {
    // res.status(404).send('Requested url was not found!');
    next('Requested url was not found!');
});

app.use((err, req, res, next) => {
    if (res.headersSent) {
        next('There was a problem');
    } else if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('There was an error!');
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
