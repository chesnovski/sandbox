//GOAL

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false


//SOLUTION

function isIsogram(str){

    let uniq =''
    for (el of Array.from(str.toLowerCase())){
        if ( uniq.includes(el)){
            return false
        } else uniq+=el
    }
    return true

}

const str = "Dermatoglyphics"
console.log(isIsogram(str))