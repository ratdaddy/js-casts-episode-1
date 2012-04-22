var fs = require('fs');

exports.all = function(fn) {
  fs.readdir('./pages', fn);
};

exports.find = function(name, fn) {
  fs.readFile('./pages/' + name, 'ascii', fn);
};
