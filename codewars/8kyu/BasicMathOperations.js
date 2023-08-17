// GOAL

//Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//SOLUTIONS

// function basicOp(operation, value1, value2)
// {
//     const operations ={
//         '+': value1+value2,
//         '-': value1-value2,
//         '*': value1*value2,
//         '/': value1/value2
//     }
//   return operations[operation]
// }

// console.log(basicOp('*', 1,2))


function basicOp(o, a, b) {
    return eval(a+o+b);
  }

console.log(basicOp('**', 5,2))  