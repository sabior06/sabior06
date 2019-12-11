'use strict';

function fib(n) {
    return  n = n-1 + n-2;
  }
  
  console.log( fib(2) ); 
  console.log( fib(2) ); 
  console.log( fib(2.5) );
  console.log( fib(3) );
  console.log( fib(4) );
  console.log( fib(5.5) );
  console.log( fib(8) );
  console.log( fib(12) );
  

  
let num = 0

for( let n = 1000; n > 50; n /= 2){

    num++;

    console.log(n);

}

console.log('sum '+ num);