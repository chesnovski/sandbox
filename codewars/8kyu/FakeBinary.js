//GOAL

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


//SOLUTION

function fakeBin(x){
    resultArr =[]
    for(el of x.split('')){
        if (el >= 5){
            resultArr.push(1)
        } else resultArr.push(0)
    }

    return resultArr.join('')

}


console.log(fakeBin('45385593107843568'))