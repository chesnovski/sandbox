//GOAL
//Fin the biggest value on array


//Solution


function findBiggest(array){
   return array.reduce((a,b)=> {
    return a<b? a:b
   })
}


console.log(findBiggest([5,6,12,7,8]))
