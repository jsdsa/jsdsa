/**
 * Radix Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: O(w*n), w is the maximum length of the number(key) in the array
 *  Description: Radix Sort is a non comparative integer sorting algorithm that sorts data by digits of the number (key)
 *  Resources: https://en.wikipedia.org/wiki/Radix_sort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */
var Floor = Math.floor;

/**
 *  radixSort:
 *      Sorts the given array using radix sort algorithm
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 * 
 *  Optional:
 *  @param {Number} [maxLength] maximum length of the key in the array
 * 
 *  @returns {undefined} Sorts the given array, returns nothing
 */
function radixSort(array, maxLength) {
	maxLength = maxLength || 10; // TODO: Add maxLength finder
	var placeValue = 1,
		buckets = generateBuckets(10),
		i;
	
	while (maxLength--) {
		for (i = 0; i < array.length; i++) {
			var digit = getDigitAtPlaceValue(array[i], placeValue);
			buckets[digit].push(array[i]);
		}
		var index = 0;
		for (i = 0; i < buckets.length; i++) {
			var bucket = buckets[i],
				j;
			for (j = 0; j < bucket.length; j++) {
				array[index++] = bucket[j];
			}
			buckets[i] = [];
		}
		placeValue *= 10;
	}
}

/**
 *  generateBuckets:
 *      Generates buckets for storing the keys based on digits at a particular placevalue
 * 
 *  Required:
 *  @param {Number} [length] length of the buckets to generate
 * 
 *  @returns {Array} returns generated buckets of given length
 */
function generateBuckets(length) {
	var buckets = new Array(length),
		i;
	for (i = 0; i < buckets.length; i++) {
		buckets[i] = [];
	}
	return buckets;
}

/**
 *  getDigitAtPlaceValue:
 *      Extracts the digit at a particular placeValue
 * 
 *  Required:
 *  @param {Number} [number] number from which digit has to be extracted
 *  @param {Number} [placeValue] placeValue of the digit to extract
 * 
 *  @returns {Number} returns the extracted digit at the given placeValue
 */
function getDigitAtPlaceValue(number, placeValue) {
	return (Floor(number / placeValue)) % 10;
}

/** Export the function as module */
module.exports.radixSort = radixSort;
