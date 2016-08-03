/**
 * Heap: 
 *  Class: Tree based data structure
 *  Data Structure: Array (can also be implemented using nodes)
 *  Time Complexity: NA
 *  Description: A heap is a specialized data structure that satisfies the "heap" property
 *  Resources: https://en.wikipedia.org/wiki/Heap_(data_structure)
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */
var Floor = Math.floor,
    comparator = {
        'max': function(a, b) {
            return a > b;
        },
        'min': function(a, b) {
            return a < b;
        }
    }


/**
 *  constructHeap:
 *      Construct a heap from the given array
 * 
 *  Required:
 *  @param {Array} [array] array to convert into heap
 *  @param {Number} [length] length of the array
 *  @param {String} [type] type of heap to construct (max or min)
 * 
 *  @returns {undefined} Constructs the given array into given type of heap
 */
function constructHeap(array, length, type) {
	if (!type) {
		throw new Error('Please mention the type of heap to construct');
	}
	var half = Floor(length / 2) - 1,
		heapifyFunction,
		i;

	switch (type) {
		case 'max':
			heapifyFunction = maxHeapify;
			break;
		case 'min':
			heapifyFunction = minHeapify;
			break;
	}
	for (i = half; i >= 0; i--) {
		heapifyFunction(array, i, length);
	}
}

/** Delete heap operation */
/**
 *  deleteTop:
 *      Deletes the top element in the heap by replacing it with last element (if present)
 * 
 *  Required:
 *  @param {Array} [array] heapified array
 *  @param {Number} [length] length of the array
 * 
 *  @returns {Number} `return` top element by replacing the top element of the heapified array with last element
 */
function deleteTop(array, length) {
	length = length || array.length;
	if (!length) {
		return -1;
	}
	var top = array[0];
	array[0] = array[length - 1];
	array.length--;
	return top;
}

/** Min-Heap Operations Starts From Here */
/**
 *  minHeapify:
 *      Min-heapify the array at current index
 * 
 *  Required:
 *  @param {Array} [array] array to heapify (min heap)
 *  @param {Number} [index] current index at which array needs to be heapified
 * 
 *  Optional:
 *  @param {Number} [length] length of the array
 * 
 *  @returns {undefined} Min-Heapify the given array at given index, returns nothing
 */
function minHeapify(array, index, length) {
	length = length || array.length;
	var isHeapified = false,
		half = Floor(length / 2) - 1;

	while (!isHeapified && index <= half) {
		var val = array[index],
			leftIndex = 2 * index + 1,
			rightIndex = 2 * index + 2,
			smallerIndex = array[rightIndex] < array[leftIndex] ? rightIndex: leftIndex;
		if (array[smallerIndex] < array[index]) {
			array[index] = array[smallerIndex];
			array[smallerIndex] = val;
			index = smallerIndex;
		} else {
			isHeapified = true;
		}
	}
}

/**
 *  constructMinHeap:
 *      Construct a min heap from the given array
 * 
 *  Required:
 *  @param {Array} [array] array to convert into min heap
 * 
 *  Optional:
 *  @param {Number} [length] length of the array
 * 
 *  @returns {undefined} Calls the constructHeap function with type: 'min'
 */
function constructMinHeap(array, length) {
	length = length || array.length;
	constructHeap(array, length, 'min');
}

/** Max-Heap Operations Starts From Here */
/**
 *  maxHeapify:
 *      Max-heapify the array at current index
 * 
 *  Required:
 *  @param {Array} [array] array to heapify (max heap)
 *  @param {Number} [index] current index at which array needs to be heapified
 * 
 *  Optional:
 *  @param {Number} [length] length of the array
 * 
 *  @returns {undefined} Max-Heapify the given array at given index, returns nothing
 */
function maxHeapify(array, index, length) {
	length = length || array.length;
	var isHeapified = false,
		half = Floor(length / 2) - 1;

	while (!isHeapified && index < length) {
		var val = array[index],
			leftIndex = 2 * index + 1,
			rightIndex = 2 * index + 2,
			largerIndex = array[rightIndex] > array[leftIndex] ? rightIndex : leftIndex;
		if (array[largerIndex] > array[index]) {
			array[index] = array[largerIndex];
			array[largerIndex] = val;
			index = largerIndex;
		} else {
			isHeapified = true;
		}
	}
}

/**
 *  constructMaxHeap:
 *      Construct a max heap from the given array
 * 
 *  Required:
 *  @param {Array} [array] array to convert into max heap
 * 
 *  Optional:
 *  @param {Number} [length] length of the array
 * 
 *  @returns {undefined} Calls the constructHeap function with type: 'max'
 */
function constructMaxHeap(array, length) {
	length = length || array.length;
	constructHeap(array, length, 'max');
}

/** Export the function as module */
module.exports.constructHeap = constructHeap;
module.exports.constructMinHeap = constructMinHeap;
module.exports.constructMaxHeap = constructMaxHeap;
