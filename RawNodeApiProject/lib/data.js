// dependencies
const fs = require('fs');
const path = require('path');

// module Scaffolding
const lib = {};

// base directory of data folder
lib.baseDir = path.join(__dirname, '../.data/');

// write Data to FIle
lib.create = (dir, file, data, callback) => {
    // open file for writing
    fs.open(`${lib.baseDir + dir}/${file}.json`, 'wx', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convert data to String
            const stringData = JSON.stringify(data);

            // write data to file and then close it
            fs.writeFile(fileDescriptor, stringData, (err2) => {
                if (!err2) {
                    fs.close(fileDescriptor, (err3) => {
                        if (!err3) {
                            callback(false);
                        } else {
                            callback('Error closing the new file');
                        }
                    });
                } else {
                    callback('Error writing to new file');
                }
            });
        } else {
            callback(err);
        }
    });
};

// read data from file
lib.read = (dir, file, callback) => {
    fs.readFile(`${lib.baseDir + dir}/${file}.json`, 'utf8', (err, data) => {
        callback(err, data);
    });
};

// update existing file
lib.update = (dir, file, data, callback) => {
    // file open for writting
    fs.open(`${lib.baseDir + dir}/${file}.json`, 'r+', (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            // convet the data to string
            const stringData = JSON.stringify(data);

            // truncate the file
            fs.ftruncate(fileDescriptor, (err1) => {
                if (!err1) {
                    // write to the file & close it
                    fs.writeFile(fileDescriptor, stringData, (err2) => {
                        if (!err2) {
                            fs.close(fileDescriptor, (err3) => {
                                if (!err3) {
                                    callback(false);
                                } else {
                                    callback('Error closing the new file');
                                }
                            });
                        } else {
                            callback('error writing to file');
                        }
                    });
                } else {
                    callback('Error truncating file');
                }
            });
        } else {
            console.log('error updating. File may not exist');
        }
    });
};

// delete existing file
lib.delete = (dir, file, callback) => {
    // unlink file
    fs.unlink(`${lib.baseDir + dir}/${file}.json`, (err) => {
        if (!err) {
            callback(false);
        } else {
            callback('error deleting file');
        }
    });
};

module.exports = lib;
