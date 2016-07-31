/**
 * Linear Search:
 *  Class: Search Algorithm
 *  Data Structure: Array
 *  Time Complexity: O(n)
 *  Description: Finds the position of a target value (key) within an array.
 *  Resources: https://en.wikipedia.org/wiki/Linear_search
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/**
 *  linearSearch: 
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
function linearSearch(array, key, low, up, length) {
    length = length || array.length;
    low = low || 0;
    up = up || length - 1;
    var i;

    /** Linear Search begins */
    for (i = low; i <= up; i++) {
        if (array[i] === key) {
            return i; // Key found
        }
    }
    return -1; // Key not found
}

/** Export the `linearSearch` function */
module.exports.linearSearch = linearSearch;
