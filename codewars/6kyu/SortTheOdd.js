//GOAL 
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

//SOLUTION


function sortArray(array) {
    const odds = array.filter((num) => num % 2 !== 0).sort((a,b)=>a-b)
    console.log(odds)
   let result =[]
   let k=0
    for (let i =0; i<array.length; i++) {
        if (array[i] % 2 !== 0) {
          result.push(odds[k])
          k++;
        } else result.push(array[i])
      }

      return result

  
    
  }


  console.log(sortArray([ 20, -43, -41, -10, -37, -21, -6, -17, 9, 9, 50, -38, -4, 15, -48, 29, 31 ] ))