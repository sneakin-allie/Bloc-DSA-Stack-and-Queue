// create a stack class
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

// and its core functions (push, pop)
class Stack {
    constructor() {
        this.top = null;
    }
    push(item) {
        if (this.top === null) {
            let node = new Node(item, null);
            this.top = node;
        } else {
            let node = new Node(item, this.top);
            this.top = node;
        }
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

// create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack
let starTrek = new Stack();
starTrek.push('Kirk');
starTrek.push('Spock');
starTrek.push('McCoy');
starTrek.push('Scotty');

// implement the following helper functions outside of the class:
// peek() which allows you to look at the top of the stack without removing it
// isEmpty() which allows you to check if the stack is empty or not 
// display() to display the stack and what is the first item?
function display(stk) {
    let currNode = stk.top;
    if (stk.top === null) return null;
    while (currNode.next !== null) {
        console.log(currNode.data);
        currNode = currNode.next;
    }
    return;
}

function isEmpty(stack) {
    console.log(stack)
    if (stack.top === null) {
        return true;
    } else return false;
}

function peek(stack) {
    if (stack.top === null) {
        return null;
    } else return stack.top.data;
}

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    let stack = new Stack();
    let compare = '';
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
    }
    for (let i = 0; i < s.length; i++) {
        compare += stack.pop();
    }
    return s === compare ? true : false;
}

function is_palindrome(s) { // a word, phrase or number that's the same backwards & forwards
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    let newStack = new Stack();
    s.split('').foEach((char) => {
        newStack.push(char); // add each character to the stack after splitting
    });
    let reverseString = ''; // start with empty string
    let count = 0;
    while (count < s.length) {
        count++;
        reverseString += newStack.pop(); // pop out each character
    }
    return s = reverseString;
}

let string01 = 'this()has the same(((num)) of (parens)';
function matchingChar(str) {
    let stack = new Stack();
    let openChar = '(';
    let closeChar = ')';
    let index = 0;
    for (let i = 0; i < str.length; i++) {
        if (openChar === str[i]) {
            index = i;
            stack.push(')');
        }
        else if (str[i] === closeChar) {
            if (!peek(stack)) {
                console.log(i);
                return false;
            }
            stack.pop();
        }
    }
    if (isEmpty(stack)) {
        return true;
    } else {
        console.log(index);
        return false;
    }
}

let breakMaybe = '[{(}this is a test)]';
let string = 'x (hello)';

function main() {
    let starTrek = new Stack();
    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    starTrek.pop();
    display(starTrek);
    isEmpty(starTrek);
}

main();

function sort(list) {

    let sortStack = new Stack();
    while(!isEmpty(list)) {
        let x = list.pop();
        while(!isEmpty(sortStack) && x > peek(sortStack)) {
            list.push(sortStack.pop());
        }
        sortStack.push(x);
    }
    return display(sortStack);
}
