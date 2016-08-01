/**
 * Quick Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: Average: O(n*logn), Worst Case: O(n^2)
 *  Description: Quick sort is a partitioning based sorting algorithm which sorts array by 
 * 					systematically placing the elements in order
 *  Resources: https://en.wikipedia.org/wiki/Quicksort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */

/**
 *  quickSort:
 *      Sorts the given array using quick sort algorithm
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 *  @param {Number} [low] lower index of the array to sort
 *  @param {Number} [up] upper index of the array to sort
 * 
 *  @returns {undefined} Sorts the given array, returns nothing
 */
function quickSort(array, low, up) {
    if (low >= up) {
        return;
    }
    var partitionIndex = partition(array, low, up);
    quickSort(array, low, partitionIndex);
    quickSort(array, partitionIndex + 1, up);
}

/**
 *  partition:
 *      Partition the given array and returns the partition index
 * 
 *  Required:
 *  @param {Array} [array] array to partition
 *  @param {Number} [low] lower index of the array to partition
 *  @param {Number} [up] upper index of the array to partition
 * 
 *  @returns {Number} Partitions the given array, returns the partition index
 */
function partition(array, low, up) {
    var pivot = array[low],
        i = low - 1,
        j = up + 1;

    while (true) {
        while (array[++i] < pivot);
        while (array[--j] > pivot && j > 0);
        if (i >= j) {
            return j;
        }
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

/** Export the function as module */
module.exports.quickSort = quickSort;
