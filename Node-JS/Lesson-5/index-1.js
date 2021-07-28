const path = require('path');
const os = require('os');
const fs = require('fs');

const myPath =
    'E:/Programming/Complete Web Development Course with Programming Hero/Web Development/Node-MongoDb/NODE-JS/LearnWithSumit-NODE-JS/Node-JS/index.js';

console.log('BaseName::', path.basename(myPath));
console.log('dirname::', path.dirname(myPath));
console.log('extname::', path.extname(myPath));
console.log('parse::', path.parse(myPath));

console.log(os.cpus());

fs.writeFileSync('myFile.txt', 'Hello programmers.');
fs.appendFileSync('myFile.txt', ' How are you?');
const data = fs.readFileSync('myFile.txt');
console.log(data); /* output is in buffer data type */
console.log(data.toString()); /* to see in original output */
// Asynchronus
fs.readFile('myFile.txt', (err, data) => {
    console.log(data.toString());
});
console.log('Hello');