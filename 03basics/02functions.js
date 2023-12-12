function calculateCartPrice(val1,...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(200,400,500));

/*------------------------------------------ */

const user={
    username:"alex",
    price:200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username}`);
}

handleObject(user)

/*------------------------------------------ */

const arr=[200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(arr));
console.log(returnSecondValue([10,20,30]));