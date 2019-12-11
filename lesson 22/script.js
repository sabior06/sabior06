'use strict';

console.log(isNaN(NaN) ); // true 


let text = 'hello';

console.log( isNaN(text) ); // true 

console.log( NaN === NaN);  //false 

console.log( isFinite('15')); // true 

console.log( parseInt('100px') );  // 100 

console.log( parseInt('12.5em') ); //12 
console.log( parseInt('12.3.4') ) //12 .3

console.log( parseInt('a123') ) // NaN 

console.log( parseInt('ff', 16) ); // 255

console.log( Math.random() ); // 
console.log( Math.random() ); 

function getRandom(min, max){
    return Math.random()* (max - min) + min;
}

console.log( getRandom(1, 10) );

console.log( Math.max(1,2,3,5,6,3,0,) ); //6
console.log( Math.min(1,2,3,5,6,3,0,) ); //0


console.log( Math.pow( 2, 10) ); //1024 


// stroki

let bigtext = `hello 
how are you?
good`; 

let str = 'Hello\nWorld';
console.log(str);


console.log( '\u00A9' ); 

console.log( '\u{1f60D}'); 

console.log( 'sdffsdf'.length ); // 7

let str2 = 'Hello';

console.log( str2[0] ); // H

console.log( str2.charAt(0) ); // H

console.log( str2[str2.length-1] ); // o 


console.log( str2[500] ); // undefined 

console.log( str2.charAt(5000) ); // ''

for(let char of 'Hello'){
    console.log( char );
}


let str3 = 'Widget with id';

console.log( str3.indexOf('Widget') ); // 0

console.log( str3.indexOf('widget') ); // -1

console.log( str3.indexOf('id') ); // 1 

console.log( str3.indexOf('id', 2 ) ); // 12 

console.log( str3.includes('Widget') ); // true 

console.log( str3.startsWith('Wid')); // true

console.log( str3.endsWith('id') ); // true 

let str4 = 'stringify';

console.log( str4.slice(0, 5) ); // 'strin

console.log( str4.slice(5) ); // 'gify'

console.log( str4.slice( -4, -1 ) ); // 'gif'

console.log( str4.substring(2, 6) ); // 'ring'

console.log( str4.substring(6, 2) ); // ' ring'

console.log( str4.substr(2, 4) ); // 'ring'

// codePointAt(pos)

console.log( 'z'.codePointAt(0) ); // 122 
console.log( 'Z'.codePointAt(0) ); // 90 

// fromCodePoint(code)

console.log( String.fromCodePoint(90) ); // 'Z'

//Arrays

let arr = new Array();

let arr2 = []; 

let fruits = [ 'Apples', 'Oranges', 'Sliva'];

console.log( fruits[1] );

fruits[2] = 'Banana';

console.log( fruits);

console.log( fruits.length); // 

fruits[90] = 'Grusha';

console.log( fruits.length); // 91

console.log( fruits); 

console.log[fruits.length + 1] = 'kivi' ;

console.log(fruits); 

let arr3 = ['Apple', 
{ name: 'Ivan'},
 true,
 function(){ return true;},
];

console.log(arr3);
console.log( arr3[1].name); // Ivan

//Methods pop/push, shift/unshift

//push - appends an element to the end.

arr3.push('Hello'); 

//push - adds an element to the end.

let deleted_item = arr3.pop();

//shift - get an element from the beginning, advancing the queue, so that the 2nd element becomes the 1st.
let deleted_item = arr3.shift(); 

//unshift - Add the element to the beginning of the array

arr3.unshift(true);

console.log(arr3); 



arr3.push('Granat', 'Laim');


/* [ 1, 2, 3, 4]
     
 [2, 3, 4]

 */ 


 for( let i = 0; i < arr3.lenght; i++) {
     console.log( arr3[i] ); 
 }

 for ( let fruits of arr3){
     console.log(fruit);
 }


