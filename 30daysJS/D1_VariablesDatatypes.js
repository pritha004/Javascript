//Variable declaration
var num=10;
console.log("var- ",num);

let str="Day1";
console.log("let- ",str);

//Constant declaration
const bool=false;
console.log("const- ",bool);

//Data Types
let n=10;
console.log(n," is ",typeof n);
let s="test";
console.log(s," is ",typeof s);
let b=false;
console.log(b," is ",typeof b);
let obj={
    id:1,
    name:"test obj"
}
console.log(obj," is ",typeof obj);
let arr=[1,2,3,4]
console.log(arr," is ",typeof arr);

//Reassigning variables
let val=10;
console.log(val);
val=20;
console.log(val);

//Understanding const
const val_const=10;
console.log(val_const);
    //val_const=20; // const variable cannot be reassigned
console.log(val_const);