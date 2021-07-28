/* express() */
const express = require('express');

const app = express();

// app.use(express.json()); /* application/json */
// app.use(express.raw()); /* application/octet-stream */
// app.use(express.text()); /* text/plain */
// app.use(express.urlencoded()); /* application/x-www-form-urlencoded */
/* app.use(
    express.static(`${__dirname}/public/`, {
        index: 'home.html',
    })
); */
const router = express.Router({
    caseSensitive: true,
}); /* by default case sensitive */
app.use(router);

router.get('/About', (req, res) => {
    res.send('Hello Express from get api');
});

router.post('/about', (req, res) => {
    // console.log(req.body);
    res.send('Hello Express from post api');
});

/* app.get('/', (req, res) => {
    res.send('Hello Express from get api');
});

app.post('/', (req, res) => {
    // console.log(req.body);
    res.send('Hello Express from post api');
}); */

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
