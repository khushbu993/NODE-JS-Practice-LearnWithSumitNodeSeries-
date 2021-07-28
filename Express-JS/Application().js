/* Application() */
const express = require('express');
// const handle = require('./handle');

const app = express();

/* template engine */
app.set('view engine', 'ejs');
app.route('/about/mission')
    .get((req, res) => {
        res.render('pages/about');
    })
    .post((req, res) => {
        res.send('Hello Express from post api');
    })
    .put((req, res) => {
        res.send('Hello Express from put api');
    });

// const admin = express();

// app.locals.title = 'My App';

// app.get('/', handle);

/* admin.on('mount', (parent) => {
    console.log('Admin Mounted');
    console.log(parent); // refers to the parent app
}); */

/* admin.get('/dashboard', (req, res) => {
    console.log(admin.mountpath);
    res.send('Welcome to admin dashboard');
}); */

// app.use('/admin', admin);

/* app.all('/', (req, res) => {
    res.send('Hello Express from get api with all method');
}); */

// app.enable('case sensitive routing');
// app.disable('case sensitive routing');

/* app.param('id', (req, res, next, id) => {
    const user = {
        userId: id,
        name: 'bangladesh',
    };
    req.userDetails = user;
    next();
});

app.get('/user/:id', (req, res) => {
    console.log(req.userDetails);
    res.send('Hello user with id');
}); */

/* app.route('/about/mission')
    .get((req, res) => {
        res.send('Hello Express from get api');
    })
    .post((req, res) => {
        res.send('Hello Express from post api');
    })
    .put((req, res) => {
        res.send('Hello Express from put api');
    });
 */

app.get('/', (req, res) => {
    res.send('Hello Express from get api');
});

app.post('/', (req, res) => {
    res.send('Hello Express from post api');
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
