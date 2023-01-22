function factorial(n){

    var total = 1;
  
    for(let i= 2 ; i <= n; i++){
      total = total * i;
    }
  
    return total;
    
  } 
factorial(5)