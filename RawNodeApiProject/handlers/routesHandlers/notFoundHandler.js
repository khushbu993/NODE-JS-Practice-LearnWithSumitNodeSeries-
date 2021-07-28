/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Khushbu Islam Misbah
 * Date: 11/15/2020
 *
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
