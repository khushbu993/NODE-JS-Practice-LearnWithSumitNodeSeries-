/* Router */
const express = require('express');
const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');

const app = express();

app.use('/admin', adminRouter);
app.use('/', publicRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
