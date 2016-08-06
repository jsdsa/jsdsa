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
