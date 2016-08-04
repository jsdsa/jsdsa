/** Require calls */
var assert = require('chai').assert,
	heapSort = require('../jsdsa/heapSort').heapSort;

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
		var val = heapSort.apply(null, args);
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
			[1, 2, 3, 4, 5, 6]
		],
		ans: [1, 2, 3, 4, 5, 6]
	},
	{
		args: [
			[3, 5, 1]
		],
		ans: [1, 3, 5]
	},
	{
		args: [
			[1]
		],
		ans: [1]
	},
	{
		args: [
			[3, 4, 2, 3, 6, 1, 7, 4]
		],
		ans: [1, 2, 3, 3, 4, 4, 6, 7]
	}
];

/** Testing */
test(testObjects);
