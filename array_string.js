// ARRAY & STRING

// 1. Create a method to determine if a string has only unique characters. Use a hash table to avoid the fact to store two times the same value.
// We expect you to find 2 solutions, without and with a new instance of Set (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

const checkCharUnicity = str => {
    const lettersArr = [];
    for(let i = 0; i < str.length; i++)
    {
        let letter = str.charAt(i);
        if(lettersArr[letter]) return false;
        lettersArr[letter] = true;
    }
    return true;
}
// other method
const checkCharUnicity2 = str => {
    const initialCount = str.split("").length;
    const uniqCount = new Set(str).size;
    return initialCount === uniqCount ? true : false;
}

console.log(checkCharUnicity2("Hi everyone")) // false
console.log(checkCharUnicity2("Hi Marc")) // true

// 2. Write a function that will return a compression on the string entered. For instance, if the input is "aabbbc", we expect as output "a2b3c1" where the number count the repetition of the letter.
const compression = str => {
    let result = '';
    let count = 0;
    for (let index = 0; index < str.length; index++) 
    {
        count++;
        if(index+1 >= str.length || str.charAt(index) != str.charAt(index+1))
        {
            result += str.charAt(index);
            result += count;
            count = 0;
        }
    }
    return result
}

console.log(compression("aabbbc")) // a2b3c1
console.log(compression("aaaaaaabbbccccgggffaaaaa")) // a7b3c4g3f2a5

// 3. Remove duplicates from an unsorted list. Why not using a hash table and return an array ?
const removeDuplicates = arr => {
    const set = new Set(arr);
    return [...set];
}

console.log(removeDuplicates(["a", "b", "c", "q", "a"]))