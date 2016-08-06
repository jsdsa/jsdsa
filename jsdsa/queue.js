/**
 * Queue: 
 *  Class: FIFO-Data Structure
 *  Time Complexity: NA
 *  Description: A linear data structure that is based on first in first out principle, queue implemented using fixed size array
 *  Resources: https://en.wikipedia.org/wiki/Queue_(abstract_data_type)
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */

/**
 *  Queue:
 *      Queue constructor
 *
 *  @param {Number} [capacity] capacity of the queue
 */
function Queue(capacity) {
    if (this instanceof Queue) {
        this.array = new Array(capacity);
        this.size = 0;
        this.capacity = capacity;
        this.front = -1;
        this.back = -1;
    } else {
        return new Queue(capacity);
    }
}

function isEmpty(queue) {
	return queue.size === 0;
}

function isFull(queue) {
	return queue.size === queue.capacity;
}
