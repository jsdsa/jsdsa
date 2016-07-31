/** Require calls */
var assert = require('chai').assert,
	radixSort = require('../jsdsa/radixSort').radixSort;

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
		radixSort.apply(null, args);
		var val = args[0];
		if (toString.call(checker) !== '[object Function]') {
			checker = function(e) { assert.deepEqual(e, ans) };
		}
		checker(val);
	});
}

/** The testObjects array containing the arguments and answer the expected answer */
var testObjects = [
	{
		args: [
			[3, 5, 4, 2, 1, 6],
			1
		],
		ans: [1, 2, 3, 4, 5, 6]
	},
	{
		args: [
			[1, 4, 3, 5, 34, 12, 100],
		],
		ans: [1, 3, 4, 5, 12, 34, 100]
	},
	{
		args: [
			[1],
			1,
		],
		ans: [1]
	},
	{
		args: [
			[123, 145, 23, 5, 4, 3, 2, 1],
			3,
		],
		ans: [1, 2, 3, 4, 5, 123, 145]
	}
];

/** Testing */
test(testObjects);
