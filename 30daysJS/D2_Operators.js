//Arithmetic operators
let num1=10;
let num2=5;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

//Assignment operators
let num3=10;
num3+=2;
console.log(num3);

let num4=10;
num4-=2;
console.log(num4);

//Comparison operators
let num5=10;
let num6=3;

console.log(num5>num6," ",num5<num6);
console.log(num5>=num6," ",num5<=num6);
console.log(num5==num6," ",num5===num6);

//Logical Operators
console.log(num5>num6 && num5<num6);
console.log(num5>=num6 || num5<=num6);
console.log(!(num5==num6));

//Ternary Operator
let num7=-5;
console.log(num7>0?"Positive":"Negative");