function findUniq(arr) {
    let newArr = arr.map(el => { return [...new Set(el.toLowerCase())].sort().join('') });
  const result = newArr.reduce((acc, curr, currentIndex)=> {
    if (newArr.indexOf(newArr[currentIndex]) === newArr.lastIndexOf(newArr[currentIndex])) return arr[currentIndex]

  })
  return result

}


console.log(findUniq([ 'silvia', 'vasili', 'victor' ]))