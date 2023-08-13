// GOAL 
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Solution


function accum(s) {
    return [...s.toUpperCase()].reduce((accum,current,index) => acc+'-'+curr+curr.toLowerCase().repeat(index))
  
  }

const array = "abcd"
  console.log(accum(array))
