// If-else statements

let num1=5;
if(num1===0)
    console.log(num1," is zero.");
else if(num1>0)
    console.log(num1," is positive.");
else
console.log(num1," is negative.");

let age=20;
if(age>=18)
    console.log("Eligible");
else
console.log("Not eligible");

//Nested if-else statements

let a=9;
let b=10;
let c=10;
if(a>=b && a>=c){
    console.log(a," is the largest number");
}else if(b>=a && b>=c){
    console.log(b," is the largest number");
}else
console.log(c," is the largest number");

//Switch case

let val=4;
switch (val) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;      
    default:
        break;
}

let grade=40;
switch (grade) {
    case 90:
        console.log("A");
        break;
    case 80:
        console.log("B");
        break;
    case 70:
        console.log("C");
        break;
    case 60:
        console.log("D");
        break;
    case 40:
        console.log("F");
        break;            
    default:
        break;
}

//Ternary operator
let num2=3;
console.log(num2%2===0?"Even":"Odd");

//Combining conditions
let year=2000;
if((year%4===0  && year%100!==0)|| year%400===0)
    console.log("Leap year");
else
    console.log("Not a leap year");