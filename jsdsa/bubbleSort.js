/**
 * Bubble Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: O(n^2)
 *  Description: Bubble sort is a simple sorting algorithm that sorts the array by comparing adjacent items
 *  Resources: https://en.wikipedia.org/wiki/Bubble_sort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */

/**
 *  bubbleSort:
 *      Sorts the given array using bubble sort algorithm
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
function bubbleSort(array, low, up) {
    low = low || 0;
    up = up || array.length - 1;
    var i;

    for (i = low; i < up; i++) {
        var j;
        for (j = low; j < up - i; j++) {
            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}

/** Export the function as module */
module.exports.bubbleSort = bubbleSort;
