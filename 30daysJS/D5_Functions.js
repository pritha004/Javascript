// Function Declaration

function checkEvenOdd(num){
    if(num%2===0)
        console.log("Even");
    else
        console.log("Odd");
}
checkEvenOdd(7);

function square(num){
    return (num**2);
}
console.log(square(4));

//Function Expression

const maxOfTwoNum=function(num1,num2){
    if(num1>num2)
        console.log(num1, " is greater than ",num2);
    else
        console.log(num2, " is greater than ",num1);
}
maxOfTwoNum(57,8);

const stringConcat=function(str1,str2){
    return (str1+str2);
}
console.log(stringConcat("Hi","Hello"));

//Arrow Functions

const sum=(num1,num2)=>{
    return(num1+num2);
}
console.log(sum(3,6))

const checkCharacter=(str,char)=>{
    if(str.toLowerCase().includes(char.toLowerCase()))
        return(true);
    else
        return(false);
}
console.log(checkCharacter("Hello","h"));

// Function Parameters and Default Values

function product(num1,num2=1){
    return num1*num2;
}
console.log(product(5));

function greet(name,age=18){
    return `Hi ${name}. Your age is ${age}`
}
console.log(greet("Alex",24));

// Higher Order Functions

function hof(func,num){
    while(num>0){
        func();
        num--;
    }
}
function hey(){
    console.log("HEY");
}
hof(hey,4);

function hof2(func1,func2,num){
    const result1=func1(num);
    const result2=func2(result1);
    return result2;
}
function add2(num){
    return (num+2);
}
function squareRoot(num){
    return Math.sqrt(num)
}
console.log(hof2(add2,squareRoot,8));