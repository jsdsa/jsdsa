/** Require calls */
var assert = require('chai').assert,
	linearSearch = require('../jsdsa/linearSearch').linearSearch;

/** Cache methods or assign Globals */
var toString = Object.prototype.toString;

/**
 *  test: 
 *      Standard test function to check a jsdsa function
 *
 *  Required:
 *  @param {Array} [array] The array of testObject
 */
function test(testObjects) {
	testObjects.forEach(function(testObject) {
		var args = testObject['args'],
			ans = testObject['ans'],
			checker = ans;
		var val = linearSearch.apply(null, args);
		if (toString.call(checker) !== '[object Function]') {
			checker = function(e) { assert.equal(e, ans) };
		}
		checker(val);
	});
}

/** The testObjects array containing the arguments and answer the expected answer */
var testObjects = [
	{
		args: [
			[1, 2, 3, 4, 5, 6],
			4
		],
		ans: 3
	},
	{
		args: [
			[1, 3, 5],
			2
		],
		ans: -1
	},
	{
		args: [
			[1],
			1
		],
		ans: 0
	},
	{
		args: [
			[1, 1, 2, 2, 3, 3],
			2
		],
		ans: 2
	}
];

/** Testing */
test(testObjects);