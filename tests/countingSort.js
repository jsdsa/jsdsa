/** Require calls */
var assert = require('chai').assert,
	countingSort = require('../jsdsa/countingSort').countingSort;

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
		countingSort.apply(null, args);
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
			[3, 5, 4, 2, 1, 6, 8],
			10
		],
		ans: [1, 2, 3, 4, 5, 6, 8]
	},
	{
		args: [
			[5, 1, 4, 3, 5],
			5
		],
		ans: [1, 3, 4, 5, 5]
	},
	{
		args: [
			[1],
			1
		],
		ans: [1]
	},
	{
		args: [
			[5, 4, 3, 2, 1, 1001, 200, 4000, 3000]
		],
		ans: [1, 2, 3, 4, 5, 200, 1001, 3000, 4000]
	}
];

/** Testing */
test(testObjects);
