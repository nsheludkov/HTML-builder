const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname,'secret-folder');

function printFileInfo(file) {
  fs.stat(path.join(dirPath, file.name), (err, stats) => {
    console.log(`${path.parse(file.name).name} - ${path.parse(file.name).ext.split('.')[1]} - ${stats.size / 1024}Kb`);
  });
}

fs.readdir(dirPath, 
  { withFileTypes: true },
  (err, files) => {
  if (err)
    console.log(err);
  else {
    files.forEach(file => {
      if (file.isFile()) {
        printFileInfo(file);
      }
      
    })
  }
});