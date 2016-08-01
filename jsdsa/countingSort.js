/**
 * Counting Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: O(n+k), where k is the maximum value of key in the array
 *  Description: Counting sort is an algorithm for sorting a collection of objects based on key values (small)
 *  Resources: https://en.wikipedia.org/wiki/Counting_sort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */
var MAX = 1e6 << 0;

/**
 *  countingSort:
 *      Sorts the given array using counting sort algorithm
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 * 
 *  Optional:
 *  @param {Number} [maxValue] maximum value of the key in the array
 * 
 *  @returns {undefined} Sorts the given array, returns nothing
 */
function countingSort(array, maxValue) {
    maxValue = maxValue || MAX;
    var countArray = new Array(maxValue + 1),
        i;

    for (i = 0; i <= maxValue; i++) countArray[i] = 0;

    for (i = 0; i < array.length; i++) {
        countArray[array[i]]++;
    }
    var count = 0,
        index = 0;
    while (count <= maxValue) {
        while (countArray[count]--) {
            array[index++] = count;
        }
        count++;
    }
}

/** Export the function as module */
module.exports.countingSort = countingSort;
