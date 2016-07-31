/**
 * Merge Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: O(n*logn)
 *  Description: Divide and conquer sorting algorithm
 *  Resources: https://en.wikipedia.org/wiki/Merge_sort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */
var Floor = Math.floor;

/**
 *  mergeSort:
 *      sorts the given array using merge sort algorithm
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 *  @param {Number} [low] lower index of the array to sort
 *  @param {Number} [up] upper index of the array to sort
 * 
 *  @returns {undefined} Sorts the given array, returns nothing
 */
function mergeSort(array, low, up) {
    if (low >= up) {
        return;
    } else {
        var mid = Floor((low + up) / 2);
        mergeSort(array, low, mid);
        mergeSort(array, mid + 1, up);
        var index = 0,
            auxArray = new Array((up - low + 1)),
            leftIndex = low,
            rightIndex =  mid + 1,
            i;
        
        while (leftIndex <= mid && rightIndex <= up) {
            var left = array[leftIndex],
                right = array[rightIndex];
            if (left < right) {
                auxArray[index++] = left;
                leftIndex++;
            } else {
                auxArray[index++] = right;
                rightIndex++;
            }
        }
        while (leftIndex <= mid) {
            auxArray[index++] = array[leftIndex++];
        }
        while(rightIndex <= up) {
            auxArray[index++] = array[rightIndex++];
        }
        for (i = 0; i < auxArray.length; i++) {
            array[low + i] = auxArray[i];
        }
        return;
    }
}

/** Export the function as module */
module.exports.mergeSort = mergeSort;
