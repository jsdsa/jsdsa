/**
 * Shell Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: O(n*(logn)^2)
 *  Description: In place sorting algorithm, usually a generalization of insertion sort
 *  Resources: https://en.wikipedia.org/wiki/Shellsort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */

/**
 *  shellSort:
 *      Sorts the given array using shell sort algorithm
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 * 
 *  Optional:
 *  @param {Array} [gaps] array of gap
 * 
 *  @returns {undefined} Sorts the given array, returns nothing
 */
function shellSort(array, gaps) {
    gaps = gaps || [701, 301, 132, 57, 23, 10, 4, 1];
    var up = array.length - 1;

    gaps.forEach(function(gap) {
        var i;
        for (i = gap; i <= up; i++) {
            var val = array[i],
                j = i;
            while (j >= gap && array[j - gap] > val) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = val;
        }
    });
}

/** Export the function as module */
module.exports.shellSort = shellSort;
