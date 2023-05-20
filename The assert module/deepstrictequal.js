var assert = require('assert');
var x = {a : {n : 0}};
var y = {a : {n : 0}};
var z = {a : {n : 1}}
assert.deepStrictEqual(x, y, "True"); //returns true
assert.deepStrictEqual(x, z, "False"); //throws an assertion error with the message False
