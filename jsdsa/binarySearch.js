/**
 * Binary Search:
 *  Class: Search Algorithm
 *  Data Structure: Array
 *  Time Complexity: O(logn)
 *  Description: Finds the position of a target value (key) within a sorted array.
 *  Resources: https://en.wikipedia.org/wiki/Binary_search_algorithm
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Cache methods or assign Globals */
var Floor = Math.floor;

/**
 *  binarySearch: 
 *      Find the index of the given `key` within the given range (`low` and `up` inclusive)
 *
 *  Required:
 *  @param {Array} [array] The array to iterate over
 *  @param {Number} [key] The key to find in the given array
 *
 *  Optional:
 *  @param {Number} [low] Lower bound for the index to find
 *  @param {Number} [up] Upper bound for the index to find
 *
 *  Undocumented:
 *  @param {Number} [length] Length of the given array
 *
 *  @returns {Number} `if` key is found in the given array
 *                      Return the the index of the key 
 *                    `else` Return -1
 */
function binarySearch(array, key, low, up, length) {
    length = length || array.length;
    low = low || 0;
    up = up || length - 1;

    /** Binary Search begins */
    while (low <= up) {
        var mid = Floor((low + up) / 2);
        if (array[mid] < key) {
            low = mid + 1;
        } else if (array[mid] > key) {
            up = mid - 1;
        } else {
            return mid; // Key found
        }
    }
    return -1; // Key not found
}

/** Export the `binarySearch` function */
module.exports.binarySearch = binarySearch;
