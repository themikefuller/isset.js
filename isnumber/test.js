// Require isnumber
var isnumber = require('./isnumber');

// Create some test data
var data = {};
data.test = 1;
data.stest = "1";
data.ftest = 0.3;

// Console log the result for each test
console.log("data: " + isnumber(data));
console.log("data.test: " + isnumber(data.test));
console.log("data.stest: " + isnumber(data.stest));
console.log("data.ftest: " + isnumber(data.ftest));
console.log("data.fake: " + isnumber(data.fake));
