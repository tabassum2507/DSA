function fibonacci(n) {
    let currentValue = 1;
    let previousValue = 0;
   
     if( n === 1){
       return 1;
     }
   
    let cond = n- 1;
   
    while(cond){
      currentValue += previousValue;
      previousValue = currentValue - previousValue
   
     cond --;
      
    }
   
     return currentValue
}