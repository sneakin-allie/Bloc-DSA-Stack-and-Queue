// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// create the constructor and method for the stack
// empty first node represented by null that indicates the top of the stack
class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        /* If the stack is empty, then the node will be the
           top of the stack */
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        /* If the stack already has something, 
           then create a new node,
           add data to the new node, and
           have the pointer point to the top */
        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop() {
        /* In order to remove the top of the stack, you have to point
           the pointer to the next item and that next item becomes the
           top of the stack */
        const node = this.top;
        this.top = node.next;
        return node.data;
    }

// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// start by creating the constructor method for the queue
// constructor contains the 1st and last nodes indicating the beginning and ending of the queue
// initially, the queue is empty until we insert something into it
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }

// code for the enqueue operation
enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
        this.first = node;
    }

    if (this.last) {
        this.last.next = node;
    }
    //make the new node the last item on the queue
    this.last = node;
}

// code for the dequeue operation
dequeue() {
    //if the queue is empty, there is nothing to return
   if (this.first === null) {
       return;
   }
   const node = this.first;
   this.first = this.first.next;
    //if this is the last item in the queue
   if (node === this.last) {
       this.last = null;
   }
   return node.value;
}