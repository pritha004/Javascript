function sayHi(){
    console.log("H");
    console.log("I");
}

sayHi()

/* ------------------------------------- */

function addTwoNumbers(num1,num2){ //num1,num2->parameters
    console.log(num1+num2);
}

const result=addTwoNumbers(3,7) //3,7->arguments
console.log("Result: ",result);

/* ------------------------------------- */

function addTwoNumbers2(num1,num2){ 
    return(num1+num2);
}

const result2=addTwoNumbers2(3,7) 
console.log("Result: ",result2);

/* ------------------------------------- */

function loginUserMsg(username="User"){
    if(username)
    return `${username} just logged in...`
}

console.log(loginUserMsg("Alex"))