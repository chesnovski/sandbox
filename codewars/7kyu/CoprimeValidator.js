function isCoprime(x, y) {
    const array1 = getDivisors(x)
      const array2 = getDivisors(y)
      const sameValues = array1.filter(value => array2.includes(value));
      if (sameValues.length !=1){
          return false
      } else if (sameValues.includes(1)) {
          return true
      }
    function getDivisors(num) {
      let divisors = [];
      for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
          divisors.push(i);
        }
      }
      return divisors;
    }
  
    // your code here
  }


  console.log(isCoprime(20 ,27))