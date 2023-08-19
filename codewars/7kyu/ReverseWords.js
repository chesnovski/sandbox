//GOAL
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps


//SOLUTION

function reverseWords(str) {
    return (str.split(' ').map(el => el.split('').reverse().join(''))).join(' ')
  }


  console.log(reverseWords("This is an example!"))