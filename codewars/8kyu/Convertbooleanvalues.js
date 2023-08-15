//GOAL

// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


//SOLUTION

function boolToWord(bool){
    if (bool === false) return 'No'
    else if (bool === true) return 'Yes'
}


console.log(boolToWord(false))
console.log(boolToWord(true))