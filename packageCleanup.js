var fs = require('fs');
var fileName = './package.json';
var file = require(fileName);

delete file.scripts.postinstall;

fs.writeFile(fileName, JSON.stringify(file, null, 2), function (err) {
    if (err) return console.log(err);
});

fs.unlink('./packageCleanup.js', () => {});