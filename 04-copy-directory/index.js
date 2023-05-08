const fsPromises= require('fs/promises');
const fs = require('fs');
const path = require('path');

async function copy(file) {
try {
  await fsPromises.copyFile(path.join(__dirname,'files',file.name), path.join(copyDir, file.name));
  console.log(`${file.name} was copied to files-copy`);
} catch {
  console.error('The file could not be copied');
}
}

copyDir = path.join(__dirname, 'files-copy');
filesDir = path.join(__dirname, 'files');
fs.mkdir(copyDir, { recursive: true }, err => {
  if (err) throw err; // не удалось создать папку
  fs.readdir( filesDir,
    { withFileTypes: true },
    (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          if (file.isFile()) {
            copy(file);
          }
        })
      }
    });
});

