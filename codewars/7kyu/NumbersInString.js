//GOAL
// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

// Please also try Simple remove duplicates

//SOLUTION

function solve(str){


    let matches = str.match(/\d+/g).reduce((a,b) => {
        return Number(a) > Number(b) ? Number(a):Number(b) 
    })
    return matches
    //..
    };


    console.log(solve("gh12cdy695m1"))
