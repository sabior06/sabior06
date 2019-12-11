'use strict'


 for (let i = 2; i <= 100; i++){

    if (!(i % 2 == 0)){continue;}

    console.log(i);

}

 
 

 function isNumberInRange(num){

    if(num > 0 && num < 10){

        return true;

    }else{

        return false;

    }

}



console.log(isNumberInRange(8))

 


function isEven(n){

    if(n % 2 === 0){

    return true;

    }else{

    return false;

    }

}

console.log(isEven(15));

console.log(isEven(16));





let value = +prompt('Value?', '');



switch (value) {

  case 0:

    alert(0);

    break;



  case 1:

    alert(1);

    break;



  case 2:

  case 3:

    alert('2,3');

    break;

}




   function min(a, b) {

    if (a < b) {

      return a;

    } else if (a > b) {

      return b;

    }else{

      return 'Values are equal';

    }

  }



  console.log(min(3, 5));

  console.log(min(5, -1));

  console.log(min(3, 3)); 

