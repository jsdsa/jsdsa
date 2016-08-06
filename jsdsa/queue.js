/**
 * Queue: 
 *  Class: FIFO-Data Structure
 *  Time Complexity: NA
 *  Description: A linear data structure that is based on first in first out principle, queue implemented using fixed size array
 *  Resources: https://en.wikipedia.org/wiki/Queue_(abstract_data_type), http://www.tutorialspoint.com/data_structures_algorithms/dsa_queue.htm
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

/**
 *  isEmpty:
 *      Checks if queue is empty (size === 0)
 * 
 *  Required:
 *  @param {Queue} [queue] queue
 * 
 *  @returns {Boolean} Returns `true` if queue is empty `else` return false
 */
function isEmpty(queue) {
	return queue.size === 0;
}

/**
 *  isFull:
 *      Checks if queue is full (size === capacity)
 * 
 *  Required:
 *  @param {Queue} [queue] queue
 * 
 *  @returns {Boolean} Returns `true` if queue is full `else` return false
 */
function isFull(queue) {
	return queue.size === queue.capacity;
}

/**
 *  enqueue:
 *      Enqueue a new value in the queue
 * 
 *  Required:
 *  @param {Queue} [queue] queue
 *  @param {Number} [val] value to enqueue in the queue
 * 
 *  @returns {Boolean} Returns `true` if value is successfully enqueued `else` return false
 */
function enqueue(queue, val) {
	if (isFull(queue)) {
		return false;
	} else {
		var front = (queue.front + 1) % queue.capacity;
		queue.array[front] = val;
		queue.size++;
		queue.front = front;
		return true;
	}
}

/**
 *  dequeue:
 *      Dequeue the value from the queue
 * 
 *  Required:
 *  @param {Queue} [queue] queue
 * 
 *  @returns {Number} Returns the dequeued value from the queue
 */
function dequeue(queue) {
	if (isEmpty(queue)) {
		return null;
	} else {
		var back = (queue.back + 1) % queue.capacity;
		queue.size--;
		queue.back = back;
		return queue.array[back];
	}
}

/**
 *  peek:
 *      Get the first element of the queue without removing it 
 * 
 *  Required:
 *  @param {Queue} [queue] queue
 * 
 *  @returns {Boolean} Returns the first element of the queue
 */
function peek(queue) {
	if (isEmpty(queue)) {
		return null;
	} else {
		var back = (queue.back + 1) % queue.capacity;
		return queue.array[back];
	}
}

Queue.prototype.isEmpty = function() {
	return isEmpty(this);
}

Queue.prototype.isFull = function() {
	return isFull(this);
}

Queue.prototype.enqueue = function(val) {
	return enqueue(this, val);
}

Queue.prototype.dequeue = function() {
	return dequeue(this);
}

Queue.prototype.peek = function() {
	return peek(this);
}

module.exports = Queue;
