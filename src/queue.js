const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  /*   this.elements = new Map();
    this.startIndex = 0;
    this.lastIndex = 0; */
  }

  getUnderlyingList() {
    return this.head;
    // return this.elements;
  }

  enqueue(value) {
    if (!this.head) {
      this.tail = new ListNode(value);
      this.head = this.tail;
      return;
    }
    this.tail.next = new ListNode(value);
    this.tail = this.tail.next;
   /*  this.elements.set(this.lastIndex, value);
    this.lastIndex++; */
  }

  dequeue() {
    /* if (this.startIndex > this.lastIndex) {
      return;
    }
    const deletedItem = this.elements.get(this.startIndex);
    this.elements.delete(deletedItem);
    this.startIndex++;
    return deletedItem; */
  /*   if(!this.head) {
    return null;
    } */
    this.deletedItem = this.head.value;
    this.head = this.head.next;
    return this.deletedItem;
  }
}

module.exports = {
  Queue
};

