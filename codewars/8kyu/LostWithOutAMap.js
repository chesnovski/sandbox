//GOAL
// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//SOLUTION

function maps(x){
    result =[]
    for (el of x){
        result.push(2*el)
    } 
    return result

}


const x = [1,2,3]
console.log(maps(x))