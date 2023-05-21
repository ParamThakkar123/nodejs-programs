var assert = require('assert');
var x = {a : {n : 0}};
var y = {a : {n : 0}};
var z = {a : {n : 0}};

assert.notDeepEqual(x, z); // returns true
assert.notDeepEqual(x, y); // assertion error
