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

/**
 *  createNode:
 *      Creates and returns a node with the given next node and value
 * 
 *  Required:
 *  @param {Node} [next] next node of the new node to create
 *  @param {Number} [val] value to assign to current node
 * 
 *  @returns {Node} Returns the node with next node as `next` and value as `val`
 */
function createNode(next, val) {
    var node = new Node();
    node.next = next;
    node.val = val;
    return node;
}

/**
 *  insertStart:
 *      Inserts a new node in the beginning of the linked list: O(1)
 * 
 *  Required:
 *  @param {Node} [head] head node of the linked list
 *  @param {Number} [val] value to assign to the node
 * 
 *  @returns {Node} Returns the newly created head node of the linked list
 */
function insertStart(head, val) {
    var node = createNode(head, val);
    return node;
}

/**
 *  insertAtLast:
 *      Inserts a new node at the last of the linked list: O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of the linked list
 *  @param {Number} [val] value to assign to the node
 * 
 *  @returns {Node} Returns the head node of the linked list with newly created last node
 */
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

/**
 *  insertEnd:
 *      Inserts a new node at the end of linked list: O(1), uses last node pointer `back`
 * 
 *  Required:
 *  @param {Node} [back] last node of linked list
 *  @param {Number} [val] value to assign to the node
 * 
 *  @returns {Node} Returns the newly created last node of the linked list
 */
function insertEnd(back, val) {
    var node = createNode(null, val);

    if (!back) {
        return node;
    } else {
        back.next = node;
        return node;
    }
}

/**
 *  deleteStart:
 *      Deletes the starting node of the linked list: O(1)
 * 
 *  Required:
 *  @param {Node} [head] head node of linked list
 * 
 *  @returns {Node} Returns the new head node after deleting the first node (head) of the linked list
 */
function deleteStart(head) {
    if (!head) {
        return null;
    } else {
        return head.next;
    }
}

/**
 *  deleteAtLast:
 *      Deletes the ending node of the linked list: O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of linked list
 * 
 *  @returns {Node} Returns the head node after deleting the last node of the linked list
 */
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

/**
 *  deleteVal:
 *      Deletes the node with the given value: Worst case O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of linked list
 *  @param {Number} [val] value of the node to delete
 * 
 *  @returns {Node} Returns the head node after deleting the node with the given value
 */
function deleteVal(head, val) {
    if (!head || head.val === val) {
        if (!head) {
            return null;
        }
        return head.next;
    } else {
        var front = head;
        while (head.next && head.next.val !== val) {
            head = head.next;
        }
        if (head.next && head.next.val === val) {
            head.next = head.next.next;
        }
        return front;
    }
}

/**
 *  update:
 *      Updates the node of the given value with new value: Worst case O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of linked list
 *  @param {Number} [val] value of the node to update
 *  @param {Number} [newVal] new (updated) value of the node
 * 
 *  @returns {Node} Returns the head node after updating the node with the given `newVal`
 */
function update(head, val, newVal) {
    if (!head) {
        return null;
    } else {
        var front = head;
        while (head && head.val !== val) {
            head = head.next;
        }
        if (head.val === val) {
            head.val = newVal;
        }
        return front;
    }
}

/**
 *  traverse:
 *      Traverses (and prints) the complete linked list with given head node: O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of linked list
 * 
 *  @returns {undefined} Prints all the data (val) in the linked list
 */
function traverse(head) {
    while (head) {
        console.log(head.val);
        head = head.next;
    }
}

/**
 *  reverse:
 *      Reverses the linked list with given head node: O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of linked list
 * 
 *  @returns {Node} Returns the new head node after reversing the linked list
 */
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
