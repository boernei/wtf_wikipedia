var helpers = require("../lib/helpers");
var parse_line = require("./parse_line");

//turn a {|...table string into an array of arrays
var parse_list = function (wiki) {


  var list = [];
  var lines = wiki.replace(/\r/g, '').split(/\n/);


  lines.forEach(function (str) {

    // consume * 
     str = str.replace(/^\*/, "");

     if (!(str.indexOf('columns') > -1) &&  !(str.indexOf('}}') > -1) && str.length > 2)
     {
        var line = parse_line(str)
        list.push(line);
     }
  });
  console.log(list)
  return list
};
module.exports = parse_list;
