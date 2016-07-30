/** Require calls */
var assert = require('chai').assert,
	bubbleSort = require('../jsdsa/bubbleSort').bubbleSort;

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
		bubbleSort.apply(null, args);
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
		],
		ans: [1, 2, 3, 4, 5, 6]
	},
	{
		args: [
			[1, 4, 3, 5],
		],
		ans: [1, 3, 4, 5]
	},
	{
		args: [
			[1],
			0,
			0
		],
		ans: [1]
	},
	{
		args: [
			[5, 4, 3, 2, 1],
			0,
			4
		],
		ans: [1, 2, 3, 4, 5]
	}
];

/** Testing */
test(testObjects);
