'use strict'

let date = new Date(2013, 0, 32);

console.log(date);

date.setDate(date.getDate() + 2);

console.log(date); 

date.setDate(1);

console.log(date);

date.setDate(0);

console.log(date); 

let date2 = new Date();

console.log( +date2);  

let start = new Date();

for(let i = 0; i < 100000; i++){
    let doSomething = i * i * i;
}

let end = new Date();

console.log(`cil vipolnalcya ${end - start} millisecond`);

let ms = Date.parse('2012-01-26T13:51:50.345-07:00');

console.log(ms);

/*find and findIndex
Imagine we have an array of objects. How do we find an object with the specific condition?

Here the arr.find(fn) method comes in handy.*/

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

  let user = users.find(item => item.id == 1);

console.log(user.name); // John

let someUsers = users.filter(item => item.id < 3);

console.log(someUsers); // 2

let lengths = ['bilbo', 'Gendalf', 'Nazgul'].map(item => item.length); 

console.log( lengths );


let arr = [ 1, 2, 15];

arr.sort();

console.log(arr); //1, 15, 2

function compare(a, b){
    if(a > b) return 1;
    if(a == b ) return 0;
    if( a < b ) return -1;
}

arr.sort(compare);

console.log(arr); //1, 2, 15

function compare2(a, b){
    return a - b;
}

arr.sort( (a,b) => a - b );

//reverse The method arr.reverse reverses the order of elements in arr.

// For instance:

let arr2 = [1, 2, 3, 4, 5];

arr2.reverse();

console.log(arr2);

/*split and join
Here’s the situation from real life. We are writing a messaging app, 
and the person enters the comma-delimited list of receivers: John, Pete, Mary. 
But for us an array of names would be much more comfortable than a single string. How to get it?

The str.split(delim) method does exactly that. It splits the string into an array by the given delimiter delim.

In the example below, we split by a comma followed by space:*/

let names = 'Bilbo, Gandalf, Nazgul';

let arr3 = names.split(', ');

console.log(arr3);

let arr4 = names.split(', ', 2);

console.log(arr4);

let arr5 = names.split('');

console.log(arr5);


/*reduce/reduceRight
When we need to iterate over an array – we can use forEach, for or for..of.

When we need to iterate and return the data for each element – we can use map.

The methods arr.reduce and arr.reduceRight also belong to that breed, but are a little bit more intricate. They are used to calculate a single value based on the array.

The syntax is: */


let arr6 = [1, 2, 3, 4, 5];

let result = arr6.reduce( (sum, current) => sum + current, 0 );

console.log( result ); //15

console.log( typeof {} ); // object
console.log( typeof [] ); // also object

console.log( Array.isArray( [] ) ); // true 
console.log( Array.isArray( {} ) ); // false 























