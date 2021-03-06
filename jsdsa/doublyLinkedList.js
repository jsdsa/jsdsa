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

/**
 *  deleteStart:
 *      Deletes the starting node of the doubly linked list: O(1)
 * 
 *  Required:
 *  @param {Node} [head] head node of doubly linked list
 * 
 *  @returns {Node} Returns the new head node after deleting the first node (head) of the doubly linked list
 */
function deleteStart(head) {
    if (!(head && head.next)) {
        return null;
    } else {
        head.next.prev = null;
        return head.next;
    }
}

/**
 *  deleteAtLast:
 *      Deletes the ending node of the doubly linked list: O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of doubly linked list
 * 
 *  @returns {Node} Returns the head node after deleting the last node of the linked list
 */
function deleteAtLast(head) {
    if (!(head && head.next)) {
        return null;
    } else {
        var start = head;
        while (head.next.next) {
            head = head.next;
        }
        head.next = null;
        return start;
    }
}

/**
 *  deleteEnd:
 *      Deletes the ending node of the doubly linked list: O(1)
 * 
 *  Required:
 *  @param {Node} [tail] tail node of doubly linked list
 * 
 *  @returns {Node} Returns the new tail node after deleting the last node (tail) of the doubly linked list
 */
function deleteEnd(tail) {
    if (!(tail && tail.prev)) {
        return null;
    } else {
        tail.prev.next = null;
        return tail.prev;
    }
}

/**
 *  deleteVal:
 *      Deletes the node with the given value: Worst case O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of doubly linked list
 *  @param {Number} [val] value of the node to delete
 * 
 *  @returns {Node} Returns the head node after deleting the node with the given value
 */
function deleteVal(head, val) {
    if (!head || head.val === val) {
        if (!head) {
            return null;
        }
        if (head.next) head.next.prev = null;
        return head.next;
    } else {
        var front = head;
        while (head.next && head.next.val !== val) {
            head = head.next;
        }
        if (head.next && head.next.val === val) {
            head.next = head.next.next;
            if (head.next) {
                head.next.prev = head;
            }
        }
        return front;
    }
}

/**
 *  update:
 *      Updates the node of the given value with new value: Worst case O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of doubly linked list
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
 *  @param {Node} [head] head node of doubly linked list
 * 
 *  @returns {undefined} Prints all the data (val) in the linked list (head to tail)
 */
function traverse(head) {
    while (head) {
        console.log(head.val);
        head = head.next;
    }
}

/**
 *  traverseBack:
 *      Traverses back (and prints) the complete linked list with given tail node: O(n)
 * 
 *  Required:
 *  @param {Node} [tail] tail node of doubly linked list
 * 
 *  @returns {undefined} Prints all the data (val) in the linked list in reverse order (tail to head)
 */
function traverseBack(tail) {
    while (tail) {
        console.log(tail.val);
        tail = tail.prev;
    }
}

/**
 *  reverse:
 *      Reverses the doubly linked list with given head node: O(n)
 * 
 *  Required:
 *  @param {Node} [head] head node of doubly linked list
 * 
 *  @returns {Node} Returns the new head node after reversing the doubly linked list
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

/** Main DoublyLinkedList functionality for usage */
function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
}

DoublyLinkedList.prototype.createNode = function(val) {
    this.head = createNode(this.head, this.tail, val);
};

DoublyLinkedList.prototype.insertStart = function(val) {
    this.head = insertStart(this.head, val);
};

DoublyLinkedList.prototype.insertAtLast = function(val) {
    this.head = insertAtLast(this.head, val);
};

DoublyLinkedList.prototype.insertEnd = function(val) {
    this.tail = insertEnd(this.tail, val);
};

DoublyLinkedList.prototype.deleteStart = function() {
    this.head = deleteStart(this.head);
};

DoublyLinkedList.prototype.deleteAtLast = function() {
    this.head = deleteAtLast(this.head);
};

DoublyLinkedList.prototype.deleteEnd = function() {
    this.tail = deleteEnd(this.tail);
};

DoublyLinkedList.prototype.deleteVal = function(val) {
    this.head = deleteVal(this.head, val);
};

DoublyLinkedList.prototype.update = function(val, newVal) {
    this.head = update(this.head, val, newVal);
};

DoublyLinkedList.prototype.traverse = function() {
    traverse(this.head);
};

DoublyLinkedList.prototype.traverseBack = function() {
    traverseBack(this.tail);
};

DoublyLinkedList.prototype.reverse = function() {
    this.head = reverse(this.head);
};

module.exports = DoublyLinkedList;
