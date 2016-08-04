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

function insertStart(head, val) {
	var node = createNode(head, val);
	return node;
}

function insertAtLast(head, val) {
	var front = head,
		node = createNode(null, val);

	if (!head) {
		return node;
	} else {
		while (head.next) {
			head = head.next;
		}
		head.next = node;
		return front;
	}
}

function insertEnd(back, val) {
	var node = createNode(null, val);

	if (!back) {
		return node;
	} else {
		back.next = node;
		return node;
	}
}

function deleteStart(head) {
	if (!head) {
		return null;
	} else {
		return head.next;
	}
}

function deleteAtLast(head) {
	if (!(head && head.next)) {
		return null;
	} else {
		var front = head;
		while (head.next.next) {
			head = head.next;
		}
		head.next = null;
		return front;
	}
}

function traverse(head) {
	while (head) {
		console.log(head.val);
		head = head.next;
	}
}

function reverse(head) {
	var list = [],
		node = null,
		i = -1;

	while (head) {
		list.push(head.val);
		head = head.next;
	}
	while (++i < list.length) {
		var val = list[i];
		node = insertStart(node, val);
	}
	return node;
}
