//GOAL
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces

//SOLUTION

function getCount(st) {
    const countVowels = Array.from (st)  .filter (letter => 'aeiou'.includes (letter)).length
    return countVowels
}

const str = 'Hello how are you'
console.log(getCount(str))