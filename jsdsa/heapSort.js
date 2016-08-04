/**
 * Heap Sort: 
 *  Class: Sorting
 *  Data Structure: Array, Heap
 *  Time Complexity: O(n*logn)
 *  Description: Heap Sort is an in place sorting algorithm that sorts the array using heap data structure
 *  Resources: https://en.wikipedia.org/wiki/Heapsort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */
var heap = require('./heap');

/** Cache methods or assign Globals */

/**
 *  heapSort:
 *      Sorts the given array using heap sort algorithm
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 * 
 *  @returns {Array} Sorts the given array and return the sorted array
 */
function heapSort(array) {
    var length = array.length,
        sortedArray = [];

    heap.constructMinHeap(array);
    while (true) {
        var head = heap.deleteTop(array);
        if (head == null) {
            break;
        }
        sortedArray.push(head);
        heap.balanceMinHeap(array);
    }
    return sortedArray;
}

/** Export the function as module */
module.exports.heapSort = heapSort;
