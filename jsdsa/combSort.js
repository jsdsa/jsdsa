/**
 * Comb Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: O(n^2)
 *  Description: Comb sort is a simple sorting algorithm that sorts the array by comparing values seperated by a gap
 *  Resources: https://en.wikipedia.org/wiki/Comb_sort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */
var Floor = Math.floor;

/**
 *  combSort:
 *      Sorts the given array using comb sort algorithm
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 * 
 *  Optional:
 *  @param {Number} [shrinkFactor] shrink factor used in comb sort (>=1)
 * 
 *  @returns {undefined} Sorts the given array, returns nothing
 */
function combSort(array, shrinkFactor) {
    shrinkFactor = shrinkFactor || 1.3;
    var length = array.length,
        gap = length,
        swapped,
        i;

    while (true) {
        gap = Floor(gap / shrinkFactor);
        if (gap < 1) {
            gap = 1;
        }
        swapped = false;
        for (i = 0; i + gap < length; i++) {
            if (array[i] > array[i + gap]) {
                var temp = array[i];
                array[i] = array[i + gap];
                array[i + gap] = temp;
                swapped = true;
            }
        }
        if (gap <= 1 && !swapped) {
            break;
        }
    }
}

/** Export the function as module */
module.exports.combSort = combSort;
