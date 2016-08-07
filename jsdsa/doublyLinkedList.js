/**
 * Doubly Linked list: 
 *  Class: Linear Storage
 *  Description: Linear collection of data elements
 *  Resources: https://en.wikipedia.org/wiki/Doubly_linked_list
 *  Extras: http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */

/**
 *  Node:
 *      Node constructor for doubly linked list
 */
function Node() {
    if (this instanceof Node) {
        this.prev = null;
        this.next = null;
        this.val = 0;
    } else {
        return new Node();
    }
}
