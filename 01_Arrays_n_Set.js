// Create a method to determine if a string has only unique characters. 
// Use a Set to avoid the fact to store two times the same value. 
// We expect you to find 2 solutions, without and with a new instance 
// of Set.


// *******************************************************
// This one works, without "Set"-Operators:
// function checkForUnique(str){
//     var hashtable = {};
//     for(var i=0, len=str.length; i<len; i++){
//         if (hashtable[str[i]] != null){
//             hashtable[str[i]] = 1;
//             return false;
//         }else{
//             hashtable[str[i]] = 0;
//         }
//     }
//     return true;
// }

// console.log(checkForUnique("Hi everyone")); 
// console.log(checkForUnique("Hi Marc"));
// console.log(checkForUnique("Bla otu"));

// *******************************************************
// :: unique = Array<any>|string => Array<any>
// const uniquenessChecker = someWords => [...new Set(someWords)]
// const aReSolver = str => uniquenessChecker(str).join('')

// console.log(
//     uniquenessChecker('Hi Marc'),   // => ['H', 'i', ' ','M', 'a', 'r','c']
//     aReSolver('Hi Marc'),           // => 'Hi Marc'
// )
// *******************************************************

// checkChar('Hi everyone'); // false
// checkChar("Hi Marc") // true

let myText = ('Hi everyone');

function checkChar () {
    

}


const mySet = new Set(myText)
mySet.size

console.log(mySet);

// checkChar("Hi everyone") // false
// checkChar("Hi Marc") // true

