const handle = (req, res) => {
    console.log(req.app.locals.title);
    res.send('Hello Express from get api');
};

module.exports = handle;
