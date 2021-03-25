class Set {
  constructor() {
    this.list = []
  };
  insert(element) {
    if (this.list.indexOf(element) === -1) {
      this.list.push(element);
    };
    return this.list;
  };
  remove(element) {
    this.list.splice(this.list.indexOf(element), 1);
    return this.list;
  };
  has(element) {
    return this.list.indexOf(element) === -1 ? false : true;
  };
  all() {
    // slice is used to create a copy. the person that would use the list would not modify it
    return this.list.slice()
  };
  length() {
    return this.list.length;
  };
};

// const set = new Set();

// console.log(set.all()); // []
// console.log(set.length()); // 0
// set.insert(0);
// set.insert(0);
// set.insert(1);
// set.insert(2);
// set.insert(2);
// set.insert(2);
// console.log(set.all()); // [ 0, 1, 2 ]
// console.log(set.length()); // 3
// set.remove(1);
// console.log(set.all()); // [ 0, 2 ]
// console.log(set.length()); // 2
// console.log(set.has(0)); // true
// console.log(set.has(1)); // false
