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

/**
 *  createNode:
 *      Creates and returns a doubly linked list node with the given prev, next and value
 * 
 *  Required:
 *  @param {Node} [prev] prev node of the new node to create
 *  @param {Node} [next] next node of the new node to create
 *  @param {Number} [val] value to assign to current node
 * 
 *  @returns {Node} Returns the node with next node as `next`, prev node as `prev` and value as `val`
 */
function createNode(prev, next, val) {
    var node = new Node();
    node.prev = prev;
    node.next = next;
    node.val = val;
    return node;
}

/**
 *  insertStart:
 *      Inserts a new node in the beginning of the doubly linked list: O(1)
 * 
 *  Required:
 *  @param {Node} [head] head node of the doubly linked list
 *  @param {Number} [val] value to assign to the node
 * 
 *  @returns {Node} Returns the newly created head node of the doubly linked list
 */
function insertStart(head, val) {
    var node = createNode(null, head, val);
    
    if (!head) {
        return node;
    } else {
        head.prev = node;
        return node;
    }
}

/**
 *  insertAtLast:
 *      Inserts a new node at the last of the doubly linked list: O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of the doubly linked list
 *  @param {Number} [val] value to assign to the node
 * 
 *  @returns {Node} Returns the head node of the doubly linked list with newly created last node
 */
function insertAtLast(head, val) {
    var start = head,
        node = createNode(head, null, val);

    if (!head) {
        return node;
    } else {
        while (head.next) {
            head = head.next;
        }
        head.next = node;
        return start;
    }
}

/**
 *  insertEnd:
 *      Inserts a new node at the end of linked list: O(1), uses last node pointer `tail`
 * 
 *  Required:
 *  @param {Node} [tail] last node of the doubly linked list
 *  @param {Number} [val] value to assign to the node
 * 
 *  @returns {Node} Returns the newly created last node of the doubly linked list
 */
function insertEnd(tail, val) {
    var node = createNode(tail, null, val);

    if (!tail) {
        return node;
    } else {
        tail.next = node;
        return node;
    }
}