//GOAL
// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//SOLUTION

function solution(str){
    return [...str].reverse().join("")
}


console.log(solution('world'))