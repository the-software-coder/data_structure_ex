class Stack {
  constructor() {
    this.list = [];
  };
  push(element) {
    if (element === undefined) return false;
    this.list = [...this.list, element]
    return this.list;
  };
  pop() {
    if (this.list.length === 0) return null;
    const removedElement = this.list[this.list.length - 1];
    this.list.length = this.list.length - 1;
    return removedElement;
  };
  top() {
    return this.isEmpty() ? 'The stack is empty' : this.list[this.list.length - 1];
  };
  isEmpty() {
    return this.list.length === 0 ? true : false;
  };
  clear() {
    this.list = [];
    return 'Stack was cleared!';
  };
};

// const stack = new Stack();

// console.log(stack.list); // []
// stack.push('fish');
// stack.push('salad');
// stack.push('tea');
// console.log(stack.list); // [ 'fish', 'salad', 'tea' ]
// console.log(stack.pop()); // tea
// console.log(stack.list); // [ 'fish', 'salad' ]
// console.log(stack.top()); // salad
// console.log(stack.isEmpty()); // false
// console.log(stack.clear()); // Stack was cleared
// console.log(stack.list); // []
// console.log(stack.isEmpty()); // true
