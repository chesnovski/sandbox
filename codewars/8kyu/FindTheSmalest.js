//GOAL
// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


//SOLUTION

function findSmallestInt(args) {
    const result = Math.min(...args)

    return result
}

const args = [78,56,232,412,228]
console.log(findSmallestInt(args))



