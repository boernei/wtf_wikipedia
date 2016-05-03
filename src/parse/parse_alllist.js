var helpers = require("../lib/helpers");
var parse_line = require("./parse_line");

var parse_alllist = function (wiki) {
  var alllist = {};
  var lines = wiki.replace(/\r/g, '').split(/\n/);

  var inlist = false;
  var curHeading = "";
  var curList = [];

  var linecounter = 0;
  lines.forEach(function (str) {

    //list item
    if (str.startsWith("*")) {

      if (inlist) {
        str = str.replace(/^\*/, "");
        var line = parse_line(str)
        curList.push(line);
      }
      else { //first item of list
        inlist = true;
        curList = [];
        if (linecounter > 1 && lines[linecounter-1].length > 1) {
          curHeading = lines[linecounter-1];
        }
        else if (linecounter > 2 && lines[linecounter-2].length > 1) {
          curHeading = lines[linecounter-2];
        }
      }
    }
    else {
      if (inlist) { // end of curLis
        inlist = false;
        curHeading = curHeading.replace(/\=\=/, "");
        curHeading = curHeading.replace(/\=\=/, "");
        curHeading = curHeading.replace(/\=/, "");
        curHeading = curHeading.replace(/\=/, "");
        curHeading = curHeading.replace(/\=\= /, "");
        curHeading = curHeading.replace(/ \=\=/, "");
        curHeading = curHeading.replace("_", "");
        curHeading = curHeading.replace(";", "");
        curHeading = curHeading.replace(":", "");
        curHeading = curHeading.replace(/\s+/g, '_');
        alllist[encodeURI(curHeading)] = curList;
      }
    }


    linecounter++;

  });
  return alllist
};
module.exports = parse_alllist;
