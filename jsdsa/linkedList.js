/**
 * Linked list: 
 *  Class: Linear Storage
 *  Description: Linear collection of data elements
 *  Resources: https://en.wikipedia.org/wiki/Linked_list
 *  Extras: http://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392
 *  Contributors: <@ironmaniiith aalekhj2507@gmail.com>
 */

/** Require calls */

/** Cache methods or assign Globals */
// TODO: push, pop, update, show, remove, reverse, circularLinkedList

/**
 *  Node:
 *      Node constructor for linked list
 */
function Node() {
	if (this instanceof Node) {
		this.next = null;
		this.val = 0;
	} else {
		return new Node();
	}
}

function createNode(next, val) {
	var node = new Node();
	node.next = next;
	node.val = val;
	return node;
}
