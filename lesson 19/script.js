"use strict";

let result = true;

console.log(result); //true 

console.log(!result); //false 

console.log(!false); //true 

console.log(!!'non-empty string'); // true boolean('non-empty string') 

if( !result === false ) { // true (!results right "false")
}

let number = 0;

while ( number < 10){
    console.log(number);
    number++;
}

let number2 = 3;

while (number2){
    console.log( number2 )
    number2--;
}



let number3 = 0 

do{
    console.log(number3);
    number3++;
} while( number3 < 3);

for (let i = 0; i < 3; i++){
    console.log( 'KOROBKA' + i );
}



let b;
for (b-0; b<3; b++){

}

console.log(b);

for (let d=0, g=0, k=0; d<3; d++){

} 


let number4 = 0;

while ( true){
    let value = +prompt( 'vvestu chaslo');

    if(!value) {break;}

    number4+=value;
}

console.log(number4);

for ( let i = 0; i < 10; i++){

    if( i % 2 == 0 ) { continue;}

    console.log(i);
}


let number5 = 4;

switch(number5){
    case 3: 
         console.log('Malovato');
         break;
    case 4:
         console.log('v tochky');
    case 5:
    case 6:
         console.log('perebor');
         break;
    default:
        console.log('NET TAKI ZNACHENII')                   
}


//fucntions 

function showMessage(){
    console.log('Hello');
}

showMessage();
showMessage();


function showMessage2(){
    let name = 'IVAN';
    console.log(`Hello ${name}`);
}

showMessage2(); 


//  


let userName = 'Peter';

function showMessage3(){
    console.log( 'Hello' + userName);
}

showMessage3();

//

function showMessage4(){
    userName = 'Aleksander';

    console.log( 'Hello' + userName);
}

showMessage4();


let user = 'Andre';

function showMessage5(){
    let user = 'Valera';
    console.log('Hello' + user);
}

console.log(user); // andre
showMessage5();
console.log(user); // andre

// 

let from = 'Vika';

function showMessage6( from, text){
      console.log(from + ': ' + text);
}

showMessage6('Anna', 'hello');
showMessage6('Anna', 'how are you?');

//

function showMessage7(from, text='text ne dobavlen'){
    console.log(from + ': ' + text);
}

showMessage7('vitalik'); // vitalik: text ne dobavlen
showMessage7('vitalik', 'hello'); // vitalik: hello 

