/*
Primitive Data Type: 7 types
String, Number, Boolean, null, undefined, Symbol, BigInt

Reference (Non primitive) Data Type:
Array, Objects, Functions

 */

const score=100;
const temp=null;
let userEmail; // sets userEmail as undefined

const id1=Symbol("123"); // creates unique vallue even though same value is passed
const id2=Symbol("123");
console.log(id1,id2);
console.log(id1==id2);
