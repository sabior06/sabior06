'use strict'


let array = ['dog', 'cat', 'fox'];

let searchKey = 'fox';

 function searchArrayWord(searchCriteria, searchArray){

    for(let key of searchArray){

         if (searchCriteria == key){

            return true;

            

            }

        }

        return false;

    }

 

console.log(searchArrayWord(searchKey, array));




let arr = [1, 2, 3, 7, 6, 9];



let sum = 0;

for(let key of arr){

    sum += key;

}

let average = sum / arr.length;

console.log(average.toFixed(2));








let arr2 = [1, 3, 5, 6, 7, 9];

for (let i = arr2.length - 1; i >= 0 ; i--) {

    console.log( arr2[i] );

  }

 


let obj = {

    html: 'HTML',

    css: 'CSS',

    js: 'ECMA',

};

console.log(Object.keys(obj));




let buy = {

    user: {

    name: 'Moline',

    phoneNumber: '3-16-49',

    address: 'moline asoye 59',

    },

   

    products: {

        cup: {

            price: 100, weight: 400,


            
        },

        spoon: {

            price: 30,  weight: 200,

        },

        teapot: {

            price: 550,    weight: 3020,


        },

        mug:{

            price: 150,

            weight: 400,

        },

    },

    get totalPrice() {

        let sumPrice = 0;

        for(let productName in this.products){

            sumPrice += this.products[productName].price;

        }

         return sumPrice;

    },

    

    get totalWeight() {

        let sumWeight = 0;

        for(let productName in this.products){

            sumWeight += this.products[productName].weight;

        }

         return sumWeight;

    },



};



console.log(buy);

console.log(buy.totalPrice);

console.log(buy.totalWeight);

/*  Create an object describing the Order on the site.

You can create it in any of the ways - even just write the instruction

The main thing to consider is that units are usually not written to the object, but

simply the numbers translated to the common unit of measurement are written (for example, kgs are converted into grams)*/