/* Response() */
const express = require('express');

const app = express();

/* temple engine */
// app.set('view engine', 'ejs');

/* app.get('/about', (req, res) => {
    console.log(res.headersSent);
    res.render('pages/about', {
        name: 'Bangladesh',
    });
    console.log(res.headersSent);
}); */

app.get('/about', (req, res) => {
    // res.send('About Page'); /* with data res end */
    // res.end(); /* without data res end */
    /* res.json({
        name: 'Bangladesh',
    }); */
    // res.status(200); /* res not end */
    // res.end();
    // res.sendStatus(400); /* res end */
    /* res.format({
        'text/plain': () => {
            res.send('Hi');
        },
        'text/html': () => {
            res.render('pages/about', {
                name: 'Bangladesh',
            });
        },
        'application/json': () => {
            res.send({
                message: 'About',
            });
        },
        default: () => {
            res.status(406).send('not acceptable');
        },
    }); */
    /* res.cookie('country', 'Bangladesh');
    res.end(); */
    /* res.location('/test');
    res.end(); */
    /* res.redirect('/test');
    res.end(); */

    res.set('platform', 'learnWithSumit');
    console.log(res.get('platform'));
    res.end();
});

app.get('/test', (req, res) => {
    res.send('HELLO!');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
