'use strict';

function c(text){
    console.log(text);
}


function sum(a, b){
    return a + b;
}

console.log(sum (10, 20)); //30

let resultSum = sum(10, 20);

console.log( resultSum); //30


function checkAge(age){
    if(age > 18){
        return true;
    }else{
        return false;
    }
}

console.log( checkAge(22)); // true 


function doNothing(){}

c( doNothing() ); // undefined

function doNothing2(){ return; }

c ( doNothing2 () ); //undefined

let sayHi = function(){
    c('privet');
};

sayHi(); // privet

c( sayHi ); //

let copySayHi = sayHi;

copySayHi();


function ask(question, yes, no){
    if(confirm ( question)){
        yes();
    }else{
        no();
    }
}

function showOk(){
    c('vi coglasni');
}
 
function showCancel(){
    c('vi ne soglacni');
}

ask('vi soglacni?', function(){c('vi soglacni');}, function(){c('vi soglacni');});


let age2 = 19;

if(age2 >= 18) {

    function welcome(){
        c('dobro pojalovat');
    }

    welcome();
}

let copyWelcome;

if(age2 >= 18){

    copyWelcome=function(){
        c('dobre pajalovat')
    };
}

copyWelcome();


let sum2 = (a, b) => a+b;

c(sum2(20, 43) ); //63


let double = n => n*2;

c(double(6) ); //2

let sayHello = () => c('Hello');

sayHello();


let sum3 = (a,b) => {
    let result = a + b;
    return result; //
};

c( sum3(14, 44 )); // 58

let user = new Object();

let user2 = {};

let user3 = {
    name : 'ivan',
    age : 30, 
    height : 180
};

// 

c( user3.name ); //ivan

c( user3 ); //


let user4 = {

    'name' : 'john',
    'home address' : 'Poltava'
};


c( user4['home address'] ); // Poltava

let option_name = 'home address';

c( user4[option_name] ); // poltava

let fruit = prompt('which fruit to buy?', 'apple');

let bag = {
    [fruit] : 5 //
};

c( bag.apple );

c( bag );


delete user3.height; //

c( user3 );

user3.isAdmin = true;

c( user3);



let user5 = {
    age: 19
};

c(user5.name === undefined); //true

c( 'name' in user5 ); // false
c('age' in user5 ); // true 

///

for(let key in user3){
    c( key + ':' + user3[key] );
}



