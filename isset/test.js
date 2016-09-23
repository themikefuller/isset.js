// Require isset
var isset = require('./isset');

// Create some test data
var data = {};
data.test = true;

// Console log the result for each test
console.log("data: " + isset(data));
console.log("data.test: " + isset(data.test));
console.log("data.fake: " + isset(data.fake));
