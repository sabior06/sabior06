'use strict';


let id = Symbol ();

let id2 = Symbol('id');

let id3 = Symbol('id');

console.log(id2 == id3); // false 


console.log( id2 ); // error 

console.log(id2.toString() ); //symbol('id')



let id4 = Symbol('id');

let user = {
    name:  'vacya'
};

user[id4] = 1; 

user[id3] = 2;

console.log(user);



let id5 = Symbol.for('id');


let idAgain = Symbol.for('id');

console.log(id5 == idAgain); // true 


// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("age");

// get name by symbol
console.log( Symbol.keyFor(sym) ); // name
console.log( Symbol.keyFor(sym2) ); // age



let car = {
    name: 'Mazda',
    maxSpeed: '200',
    color: 'green',
    'current distance':0,
    drive: function(){
        this['current distance'] +=100;
        console.log( this ['current distance'] + 'izmenicya');

    }
};


car.drive();
car.drive();
car.drive();


car.stop = function(){
    console.log('the care will stop');
};

car.stop();



console.log(car);

console.log(Number(car) ); //NaN

let text = new String('Tekct')

text = ['T',  'e', 'k', 'c', 't'];

function User(username){
    this.name = username;
    this.isAdmin = false;

}

let user_noadmin = new User('Andre');

console.log(user_noadmin.name); // Andre
console.log(user_noadmin.isAdmin); // False


let str = ' privet';

console.log( str.toUpperCase() ); // privet

let billion = 1e9; // 1 billion

let ms = 1e-6; // 0.000001


console.log( oxff ); // 255


let a = 0b11111111; // 255 

let b = 0o377; // 255

console.log( a == b ); // true 

let num = 255;

console.log( num.toString(16) ); // ff 


let num2 = 3.1;
console.log( Math.floor(num2) );//3 

console.log( Math.ceil(num2) ); //4

console.log( Math.round(num2) ); //3

console.log( Math.trunc(num2) ); //3


let num3 = 1.23456;

console.log( Math.floor(num3 * 100) / 100); // 1.23456 ->123.456 ->123 ->1.23 

let num4 = 12.34;
console.log(num4.toFixed(1)); // 12.3 

let num5 =12.36;
console.log( num4.toFixed(1) ); // 12.4 


let num6 = 12.34; 
console.log( num6.toFixed(6) ); // '12.34000'

// 


console.log( 1e500 ); // infinity

console.log( 0.1 + 0.2 == 0.3 ); // false 

console.log( 0.1 + 0.2 ); //0.3000000000000000

console.log( 0.1 ); // 0.1

console.log( 0.1.toFixed(20) ); // 0.1


let sum2 = 0.1 + 0.2 ;

console.log( +sum2.toFixed(2) ) //0.3

console.log( (0.1 * 10 + 0.2 * 10) / 10 ); // 0.3 

console.log( (0.28* 100 + 0.14 * 100) / 100); // 0.42000000000000000000001

console.log ( 9999999999999999 ); //100000000000000000







