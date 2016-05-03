var helpers = require("../lib/helpers");
var parse_line = require("./parse_line");

var parse_synopsis = function (wiki) {
  
  var synopsis = [];

  var lines = wiki.replace(/\r/g, '').split(/\n/);

  var linecounter = 0;

  lines.forEach(function (str) {

     linecounter++;

     if (linecounter > 5)
     {

      return synopsis;
     }
     else
     {
        var line = parse_line(str)
        synopsis.push(line);
     }
  });

  
  return synopsis
};
module.exports = parse_synopsis;
