/*
 * Title: user Handler
 * Description: Handler to handle user related routes
 * Author: Khushbu Islam Misbah
 * Date: 11/15/2020
 *
 */

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler.Users[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler.Users = {};

handler.Users.post = (requestProperties, callback) => {};

handler.Users.get = (requestProperties, callback) => {
    callback(200);
};

handler.Users.put = (requestProperties, callback) => {};

handler.Users.delete = (requestProperties, callback) => {};
module.exports = handler;
