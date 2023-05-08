const fs = require('fs');
const path = require('node:path');


const textFilePath = path.join(__dirname, 'text.txt');


const stream = fs.createReadStream(textFilePath, 'utf-8');

let data = '';

stream.on('data', chunk => data += chunk);
stream.on('end', () => console.log('End', data));
stream.on('error', error => console.log('Error', error.message));