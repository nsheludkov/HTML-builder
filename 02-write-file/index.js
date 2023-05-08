const fs = require('fs');
const path = require('path');

const newTextFilePath = path.join(__dirname, 'rsshool.txt');
const output = fs.createWriteStream(newTextFilePath);
const process = require('node:process');

const { stdin } = process;

fs.writeFile(
  newTextFilePath,
  '',
  (err) => {
      if (err) throw err;
      console.log('Hello traveller! What can i do for you?');
  }
);

stdin.on('error', error => console.log('Error', error.message));

function exitProgram () {
  process.exit();
}

stdin.on('data', data => {
  const currStr = data.toString(); 
  if (currStr === 'exit\r\n') {
    exitProgram();
  }
  output.write(data);
});
  
process.on('exit', () => console.log('Удачи в изучении Node.js!'));
process.on('SIGINT', exitProgram);
