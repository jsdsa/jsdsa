/**
 * Bucket Sort: 
 *  Class: Sorting
 *  Data Structure: Array
 *  Time Complexity: Worst case: O(n^2)
 *  Description: Bucket sort sorts the elements of the array by distributing them into a number of buckets
 *  Resources: https://en.wikipedia.org/wiki/Bucket_sort
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */
var insertionSort = require('./insertionSort').insertionSort;

/** Cache methods or assign Globals */
var Ceil = Math.ceil,
    Floor = Math.floor,
    MAX = 1e6 << 0;

/**
 *  bucketSort:
 *      Sorts the given array using bucket sort algorithm (this variant is with insertion sort)
 * 
 *  Required:
 *  @param {Array} [array] array to sort
 * 
 *  Optional:
 *  @param {Number} [range] upper bound of the values in array (values must be strictly less then range)
 *  @param {Number} [bucketSize] size of the bucket to use over the given range
 * 
 *  @returns {undefined} Sorts the given array, returns nothing
 */
function bucketSort(array, range, bucketSize) {
    range = range || MAX;
    bucketSize = bucketSize || 1000;
    var numberOfBuckets = Ceil(range / bucketSize),
        container = [],
        val,
        i;

    for (i = 0; i < numberOfBuckets; i++) {
        container.push([]);
    }
    for (i = 0; i < array.length; i++) {
        val = array[i];
        indexOfBucket = Floor(val / bucketSize);
        container[indexOfBucket].push(val);
    }

    var index = -1;
    for (i = 0; i < container.length; i++) {
        var j;
        val = container[i];
        insertionSort(val);
        for (j = 0; j < val.length; j++) {
            array[++index] = val[j];
        }
    }
}

/** Export the function as module */
module.exports.bucketSort = bucketSort;
