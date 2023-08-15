//GOAL
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces

//SOLUTION

function Atat (arr,n){
    count ={}
    ann =[]

    for (el of arr){
        if (count[el]) count[el] =count[el]+1
        else count[el] =1
        if (count[el]<=n) ann.push(el)
    }

    return ann

}

arr = [1,2,3,12,3,12,3,12,3]
console.log(Atat(arr,2))

