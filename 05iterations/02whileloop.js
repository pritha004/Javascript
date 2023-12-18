/*
While loop:

while (condition) {
    
}

Do-while loop:

do {
    
} while (condition);

*/

let i=0;
while(i<=10){
    console.log(`Value of index ${i}`);
    i=i+2;
}

let myArray=["flash","batman","superman"];
let arr=0;
while (arr<myArray.length) {
    console.log(myArray[arr]);
    arr++;
}


let score=11;
do {
    console.log(`Score is ${score}`);
    score++;
} while (score<=10);