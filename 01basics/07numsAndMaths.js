//------Numbers--------

const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance);
console.log(balance.toString(),typeof (balance.toString()));
console.log(balance.toFixed(2));// decimal precision

const num=23.8966;
console.log(num.toPrecision(3));//23.9
// 123.8966->toPrecision(3)->124
// 1123.8966->toPrecision(3)->1.12e+3
// 123.8966->toPrecision(4)->123.9

const hundreds=1000000;
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//----------Maths------------

console.log(Math);// Math is an Object
console.log(Math.abs(-4));
//round,ceil,floor,sqrt,pow,min,max

console.log(Math.random());// value between 0 and 1
console.log((Math.random()*10)+1);

//To get a random number between a range of values
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
