/**
 * Selection Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: O(n^2)
 *  Description: Builds a sorted array by swapping method
 *  Resources: https://en.wikipedia.org/wiki/Selection_sort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */

/**
 *  selectionSort:
 *      sorts the array using swapping method in O(n^2) time complexity
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
function selectionSort(array, low, up) {
	low = low || 0;
	up = up || array.length - 1;
	var i;

	for (i = low; i < up; i++) {
		var min = array[i],
			minIndex = i,
			j;
		for (j = i + 1; j <= up; j++) {
			if (array[j] < min) {
				min = array[j];
				minIndex = j;
			}
		}
		if (i !== minIndex) {
			var temp = array[i];
			array[i] = array[minIndex];
			array[minIndex] = temp;
		}
	}
}

/** Export the function as module */
module.exports.selectionSort = selectionSort;
