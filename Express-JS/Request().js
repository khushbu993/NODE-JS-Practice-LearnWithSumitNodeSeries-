/* Request() */
const express = require('express');
const cookieParser = require('cookie-parser');
const handler = require('./handler');

const app = express();

app.use(express.json());
app.use(cookieParser());

/* Sub App */
const adminRoute = express();

adminRoute.get('/dashboard', (req, res) => {
    console.log(req.query);
    // console.log(req.params);
    // console.log(req.protocol);
    // console.log(req.method);
    // console.log(req.hostname);
    // console.log(req.path);
    // console.log(req.originalUrl);
    // console.log(req.url);
    // console.log(req.baseUrl);
    res.send('We are in admin dashboard');
});

app.use('/admin', adminRoute);
/* Sub App End */

app.get('/user/:id', (req, res) => {
    console.log(req.route);
    // console.log(req.secure);
    // console.log(req.cookies);
    // console.log(req.query);
    // console.log(req.params.id);
    // console.log(req.params);
    // console.log(req.protocol);
    // console.log(req.method);
    // console.log(req.hostname);
    // console.log(req.path);
    // console.log(req.originalUrl);
    // console.log(req.url);
    // console.log(req.baseUrl);
    res.send('Hello World');
});

app.get('/user', handler);

app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Hello World POST');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
