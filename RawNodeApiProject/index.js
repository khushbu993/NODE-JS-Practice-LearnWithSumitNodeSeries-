/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Khushbu Islam
 * Date: 11/15/2020
 *
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing File System
/* data.create('test', 'newFile', { name: 'Bangladesh', language: 'Bangla' }, (err) => {
    console.log('error was', err);
}); */
/* data.read('test', 'newFile', (err, result) => {
    console.log(err, result);
}); */
/* data.update('test', 'newFile', { name: 'America', language: 'English' }, (err) => {
    console.log('error was', err);
}); */
/* data.delete('test', 'newFile', (err) => {
    console.log('error was', err);
}); */

/* // Configuration
app.config = {
    port: 5050,
};
 */
// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
