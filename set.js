const Set = function() {
  this.args = {};
  this.size = 0;
};

Set.prototype.insert = function(element) {
  if (Object.values(this.args).indexOf(element) === -1) {
    this.args[this.size] = element;
    this.size++;
  }
};

Set.prototype.remove = function(element) {
  for (let key in this.args) {
    if (this.args[key] === element) {
      this.size--;
      this.args[key] = this.args[this.size];
      delete this.args[this.size];
    }
  }
};

Set.prototype.has = function(element) {
  const elem = Object.values(this.args).indexOf(element);
  return elem !== -1;
};

Set.prototype.all = function() {
  let newArray = [];
  for (let element in this.args) {
    if (this.args.hasOwnProperty(element)) {
      newArray.push(this.args[element]);
    }
  }
  return newArray;
};

Set.prototype.length = function() {
  return this.size;
};
