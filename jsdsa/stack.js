/**
 * Stack: 
 *  Class: LIFO-Data Structure
 *  Time Complexity: NA
 *  Description: A linear data structure that is based on last in first out principle, stack implemented using fixed size array
 *  Resources: https://en.wikipedia.org/wiki/Stack_(abstract_data_type), http://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm
 *  Extras: 
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */

/**
 *  Stack:
 *      Stack constructor
 *
 *  @param {Number} [capacity] capacity of the stack
 */
function Stack(capacity) {
    if (this instanceof Stack) {
        this.array = new Array(capacity);
        this.size = 0;
        this.capacity = capacity;
        this.top = -1;
    } else {
        return new Stack(capacity);
    }
}

/**
 *  isEmpty:
 *      Checks if stack is empty (size === 0)
 * 
 *  Required:
 *  @param {Stack} [stack] stack
 * 
 *  @returns {Boolean} Returns `true` if stack is empty else return `false`
 */
function isEmpty(stack) {
	return stack.size === 0;
}

/**
 *  isFull:
 *      Checks if stack is full (size === capacity)
 * 
 *  Required:
 *  @param {Stack} [stack] stack
 * 
 *  @returns {Boolean} Returns `true` if stack is full else return `false`
 */
function isFull(stack) {
	return stack.size === stack.capacity;
}

/**
 *  push:
 *      Push a new value in the stack
 * 
 *  Required:
 *  @param {Stack} [stack] stack
 *  @param {Number} [val] value to push in the stack
 * 
 *  @returns {Boolean} Returns `true` if value is successfully pushed else return `false`
 */
function push(stack, val) {
	if (isFull(stack)) {
		return false;
	} else {
		var top = stack.top + 1;
		stack.array[top] = val;
		stack.size++;
		stack.top = top;
		return true;
	}
}

/**
 *  pop:
 *      Pop the value from the stack
 * 
 *  Required:
 *  @param {Stack} [stack] stack
 * 
 *  @returns {Number} Returns the popped value from the stack
 */
function pop(stack) {
	if (isEmpty(stack)) {
		return null;
	} else {
		var top = stack.top;
		stack.size--;
		stack.top--;
		return stack.array[top];
	}
}

/**
 *  peek:
 *      Get the top element of the stack without popping it
 * 
 *  Required:
 *  @param {Stack} [stack] stack
 * 
 *  @returns {Boolean} Returns the top element of the stack
 */
function peek(stack) {
	if (isEmpty(stack)) {
		return null;
	} else {
		return stack.array[stack.top];
	}
}

Stack.prototype.isEmpty = function() {
	return isEmpty(this);
};

Stack.prototype.isFull = function() {
	return isFull(this);
};

Stack.prototype.push = function(val) {
	return push(this, val);
};

Stack.prototype.pop = function() {
	return pop(this);
};

Stack.prototype.peek = function() {
	return peek(this);
};

module.exports = Stack;
