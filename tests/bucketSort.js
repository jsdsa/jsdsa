/** Require calls */
var assert = require('chai').assert,
	bucketSort = require('../jsdsa/bucketSort').bucketSort;

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
		bucketSort.apply(null, args);
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
			10,
			2
		],
		ans: [1, 2, 3, 4, 5, 6]
	},
	{
		args: [
			[120, 4123, 1227, 1927, 571, 39, 1, 92],
			5000,
			100
		],
		ans: [ 1, 39, 92, 120, 571, 1227, 1927, 4123 ]
	},
	{
		args: [
			[1]
		],
		ans: [1]
	},
	{
		args: [
			[5, 4, 3, 2, 1],
			6,
			1
		],
		ans: [1, 2, 3, 4, 5]
	}
];

/** Testing */
test(testObjects);
