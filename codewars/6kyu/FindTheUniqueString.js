function findUniq(arr) {
    let newArr = arr.map(a => { return [...new Set(a.toLowerCase())].sort().join('') });
    return newArr
  }


console.log(findUniq([ 'silvia', 'vasili', 'victor' ]))