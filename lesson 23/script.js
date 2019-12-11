'use strict'

let arr1 = [1, 4, 7, 8];
let arr2 = [];

for(let item of arr1){
    arr2.unshift(item);
}

console.log(arr2);



let obj1 = {
    name : 'ivan',
    age : 25 
};

let admin = obj1;

admin.name = 'alekcandr';

console.log(obj1.name); // alekcandr 

let name = 'ivan';
let user = name;

let clone = {};

for( let key in obj1){
    clone[key] = obj1[key];
}



let obj2 = {name : 'peter'};

let permission1 = { canView: true};
let permission2 = { canEdit: false};


Object.assign(obj2, permission1, permission2);

console.log(obj2);


let fruits = [];
fruits[123] = 'apple';

console.log(fruits.length);

let arr3 = [1,2,3,4,5,5,10];

arr3.length = 2;

console.log(arr3);


let arr4 = new Array ('apples', 'grusha', 'orange');

let arr5 = new Array (4); 

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log( matrix[1][1] ); // 5 


let arr6 = [1, 2, 3];

console.log( String(arr6) ); // ' 1,2,3'

console.log( [] + 1); //'1'
console.log( [1] + 1); // '11'
console.log( [1,2] + 1); // '1,21'


let arr7 = ['1', 'hello', 'name'];

arr7.splice(1, 1);


console.log(arr7);

let deleted = arr7.splice(0, 3, 'apples', 'Grusha');

console.log(arr7);

console.log(deleted);

arr7.splice(1, 0, 1, 3, 5);

console.log(arr7);

let arr8 = ['h', 'e','1', '1', '0'];

console.log( arr8.slice(1, 3) );

let arr9 = [];

console.log( arr9.concat(arr8, arr7, 12) );



arr7.forEach( function(item, index, array){
    console.log(index + ' ' + item );
});


console.log( arr7.indexOf(1)); //1 

console.log( arr7.indexOf(3) ) // 2 

console.log( arr7.includes(1) ); // true 


// Date and time 

// work with time and date 

let now = new Date();

console.log(now); 

let jan01_1970 = new Date(0);

console.log(jan01_1970);

let jan02_1970 = new Date(24* 3600 * 1000); //02.01.1970 

console.log(jan02_1970); 

console.log( now.getFullYear() ); // 







