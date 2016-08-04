/**
 *  swap:
 *      Swaps the two numbers according to their indices in the given array
 * 
 *  Required:
 *  @param {Array} [array] array in which swap needs to happen
 *  @param {Number} [i] index of the first number to swap
 *  @param {Number} [j] index of second number to swap
 * 
 *  @returns {undefined} Swaps the numbers according to `i` and `j`
 */
function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

module.exports = swap;
