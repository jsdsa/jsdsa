/**
 * Insertion Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: O(n^2)
 *  Description: A sorting algorithm that builds the final sorted array one item at a time
 *  Resources: https://en.wikipedia.org/wiki/Insertion_sort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */

/**
 *  insertionSort:
 *      Sorts the given array using insertion sort algorithm
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 * 
 *  Optional:
 *  @param {Number} [low] lower index of the array to sort
 *  @param {Number} [up] upper index of the array to sort
 * 
 *  @returns {undefined} Sorts the given array, returns nothing
 */
function insertionSort(array, low, up) {
	low = low || 0;
	up = up || array.length - 1;

	for (var i = low + 1; i <= up; i++) {
		var val = array[i],
			j = i;

		while (j > 0 && array[j - 1] > val) {
			array[j] = array[j - 1];
			j--;
		}
		array[j] = val;
	}
}

/** Export the function as module */
module.exports.insertionSort = insertionSort;
