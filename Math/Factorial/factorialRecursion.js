function factorial(n){

    if( n < 1){   //base case
      return 1;
    } else {
      return(n*factorial(n-1))
    }
    
}

function factorial(n){
    return n > 1 ? n * factorial(n- 1) : 1;
}