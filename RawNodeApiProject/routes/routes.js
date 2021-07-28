/*
 * Title: Routes
 * Description: Application Routes
 * Author: Khushbu Islam Misbah
 * Date: Date: 11/15/2020
 *
 */

// dependencies
const { sampleHandler } = require('../handlers/routesHandlers/sampleHandlers');
const { userHandler } = require('../handlers/routesHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
