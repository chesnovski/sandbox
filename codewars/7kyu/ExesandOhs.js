// GOAL 

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


// SOLUTION

function X0(str) {
    const countX = str.match(/x/gi)
    const countO = str.match(/o/gi)
    if (countO && countX != null) {
        
        return countX.length === countO.length

    } else if (countO || countX) {return false}
    else {return true}
    

}

console.log(X0("xooxx"))