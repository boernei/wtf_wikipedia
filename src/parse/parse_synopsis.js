var helpers = require("../lib/helpers");
var parse_line = require("./parse_line");

var parse_synopsis = function (wiki) {
  
  var synopsis = [];

  var lines = wiki.replace(/\r/g, '').split(/\n/);

  var linecounter = 0;

  lines.forEach(function (str) {


     if (linecounter > 5)
     {

      return synopsis;
     }
     else
     {
        linecounter++;
        var line = parse_line(str)
        if(line.text && line.text.length > 100)
            synopsis.push(line);
     }
  });

  
  return synopsis
};
module.exports = parse_synopsis;
