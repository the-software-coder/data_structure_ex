/*

Question 4, Stacks & Queues


A: A stack is a data structure that follows the last-in-first-out. Think of it like a stack of books: In order to get the book at the bottom, you need to lift (or "pop") the books above it first.
In JavaScript, you can create a stack with an an array. Using the .push() method, you add an element to the end of the array (or a book on the stack of books) and with .pop(), you remove that item again.

A queue is comparable to a stack in structure and methods, but instead of using the last-in-last-out paradigm, it uses the first-in-first-out method. That means - like in a line in the supermarket - first come first served.
The person who's been waiting the longest in line gets served first. Using the array again, you would add/remove items using the methods .unshift() and .pop().


Question 5, Bind, apply and call

A: call(), apply() and bind() are JavaScript function and used to control the invocation of another function. Call()/apply() invoke the function immediately with a modification of the context. Bind() returns a bound function, that, when executed later, will have the correct context "this" for calling the original function.


Question 6, 1, 2, 3?

A: The setTimeout function uses the variable 'i' which is declared outside of itself (in the loop). When the for loop is done running, each of the inner functions refers to the same variable i, which is 3 at the end of the loop.
One possible solution is to return an immediately-invoked function expression, so each inner function maintains its reference to the variable i.


const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}


Question 7, Closures
A: You can create a closure to keep the value passed to the function createBase even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable baseNumber.

*/

function createBase(baseNumber) {
    return function(N) {
    // we are referencing baseNumber here even though it was declared
    // outside of this function. Closures allow us to do this in JavaScript
        return baseNumber + N;
    }
}

let addSix = createBase(6);
addSix(10);
addSix(21);


/* 

Question 8, Generators

A: A generator is a function that can stop midway and then continue from where it stopped. In short, a generator appears to be a function but it behaves like an iterator. A normal function cannot be stopped before it finishes its task (hits the return statement). Also, if you call it again, it starts from the beginning. In contrast, a generator can stop midway and then continue from where it stopped. Instead of the value itself, the generator function returns an object on which you can call next(). Every invocation of next() will return an object of shape:

{
    value: Any,
    done: true|false
}


Question 9, Sets 

A: Set objects are abstract data types which contain only unique values in contrast to Arrays, which can contain the same value multiple times. Arrays are considered an "indexed" collection, while Sets are more similar to Objects using keys, only that the keys in Sets are 0, 1, 2, 3 etc. Sets are useful when you want to maintain distinct data with minimum effort.

Question 10, Recursive Functions

A: Recursion, is a function that calls itself based on a terminating condition, makes use of the stack. Using LIFO, a call to a recursive function saves the return address so that it knows how to return to the calling function after the call terminates.

*/

