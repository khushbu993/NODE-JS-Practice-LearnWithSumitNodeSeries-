/*
 * Title: Environment
 * Description: handle all environment things
 * Author: Khushbu Islam Misbah
 * Date: 11/15/2020
 *
 */

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    port: 3030,
    envName: 'staging',
};

environments.production = {
    port: 5050,
    envName: 'production',
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
