/* Middleware */
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json()); /* built-in middleware */

app.use(cookieParser()); /* third-party middleware */

const adminRouter = express();

/* const logger = (req, res, next) => {
    console.log(
        `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${
            req.protocol
        } - ${req.ip}`
    );
    // res.end();
    next();
    // throw new Error('this is an error');
}; */
const loggerWrapper = (options) => (req, res, next) => {
    if (options.log) {
        console.log(
            `${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl} - ${
                req.protocol
            } - ${req.ip}`,
        );
        next();
    } else {
        throw new Error('Failed to log');
    }
};
adminRouter.use(loggerWrapper({ log: true }));

adminRouter.get('/dashboard', (req, res) => {
    res.send('Dashboard');
});

app.use('/admin', adminRouter);
// app.use(logger);

/* const myMiddleware1 = (req, res, next) => {
    console.log('I am logging1');
    next();
};
const myMiddleware2 = (req, res, next) => {
    console.log('I am logging2');
    next();
};
app.use(myMiddleware1);
app.use(myMiddleware2); */

app.get('/about', (req, res) => {
    res.send('About Page');
});

/* error handling middleware */
const errorMiddleware = (err, req, res, next) => {
    console.log(err.message);
    res.status(500).send('There was a server side error');
};

adminRouter.use(errorMiddleware);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
