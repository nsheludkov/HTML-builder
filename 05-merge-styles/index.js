const fs = require('fs');
const path = require('path');

const stylesDir = path.join( __dirname, 'styles');
const output = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));

async function copyCSS() {
  fs.readdir(stylesDir, (err, files) => {
    if (err) throw err; // не удалось прочитать папку
      files.forEach((file) => {
        if (path.extname(path.join(stylesDir, file)) === '.css') {
          const input = fs.createReadStream(path.join(stylesDir, file));
          input.on('data', data => { 
            output.write(data);
          });
        }
      })
  });
}

copyCSS();