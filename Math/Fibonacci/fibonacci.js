//using while


function fibonacci(n){
    const final = [1];

    let currentValue = 1;
    let previousValue = 0;
  
    if (n === 1) {
      return final;
    }
  
    let iterationsCounter = n - 1;
  
    while (iterationsCounter) {
      currentValue += previousValue;
      previousValue = currentValue - previousValue;
  
      fibSequence.push(currentValue);
  
      iterationsCounter -= 1;
    }
  
    return fibSequence;
}

function fibonacci(n) {
    let n1 = 0, n2 = 1, nextTerm;
  
    
  for (let i = 1; i <= n; i++) {
      console.log(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
  }
  }

