
var c=300; //Global scope-> var should not be used

if(true){ //Block scope
    let a=10;
    const b=20;
    var c=30; 
}

// console.log(a);
// console.log(b);
console.log(c);

/*------------------------------------------ */

function one(){
    const username="alex";

    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website); //gives error as accessed outside function two
    two()
}

one()

/*----------------------HOISTING-------------------- */

console.log(addone(5)) //gives output
function addone(num){
    return num+1;
}


console.log(addTwo(5)) //cant call before function declaration in case of function expression->throws error
const addTwo=function(num){ //function expression
    return num+2
}
