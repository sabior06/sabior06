
let x = 2 * 3 - 1; //5

let a, b, c;

a = b = c = 2 + 2; //4

let z = 3 - (a = b + 1); //-5

console.log( 5 % 2); //1
console.log( 8 % 3 ); //2
console.log( 6 % 3); //0

console.log( 2 ** 2 ); //4
console.log( 2 ** 4 ); //16

console.log( 4 ** (1/2 )); // 2

let counter = 2; 
counter ++;

console.log( counter); //3 


counter --;
console.log( counter ); //2

let counter2 = 1;
let number = ++counter2;

console.log(number); //2

let counter3 = 1;
let number2 = counter3++;

console.log(number2); //1

console.log(counter3); //2


let n = 5;
n = n * 5;
n *= 5; 

let m = 2;
m *= 3 + 5;

console.log(m); //16

let g = ( 1 +2 , 3 + 4); //7

// operation < or >

console.log( 2 > 1 ); // true 


// operation >= greater than or equeal to 

console.log( 10 >= 10);

// operation (==)

console.log( 5 == 10); // false 

// operation not equeal not !=

console.log( 5 != 10 ); // true 


let result = 5 > 4;
console.log(result); //true 

console.log( 'my' > 'A'); //true 

console.log('kot' > 'kod'); //true 

console.log ('sonni' > 'son '); // true  

console.log( '2' > 1); // true 

console.log( '01' ==1 ); // true 

console.log( true == 1); // true

console.log( true === 1) // false 

console.log( null === undefined); //false

console.log( null == undefined ); //true 

console.log( null > 0 ); //false
console.log( null == 0 ); //false
console.log( null >= 0 ); //true

console.log( undefined > 0 ); // false  
console.log( undefined < 0 ); // false  
console.log( undefined == 0 ); // false  


if( typeof fgh == undefined){// true 
   console.log(typeof fgh);
};

alert('hello');

//prompt()

let text_from_user = prompt('how old are you ?', '18');
console.log(text_from_user);

let question = confirm( 'today saturday?');

console.log(question);


if( question == true){
console.log('right');
}else {
    console.log( 'not right')
}

let d = null;

if(d) {
    /*everything that happens in the brackets is converted to
     boolen before checking*/
    console.log('123');
}


//several conditions 'for else if'

let year = 2016;

if ( year < 2016 ){
    console.log('too much');

} else if ( year > 2016){
    console.log('too late');
} else{
    console.log('right');
}

let accessAllowed;
let age = 18;

if (age >= 18){
    accessAllowed = true;
}else{
    accessAllowed = false;
}

console.log(accessAllowed);