/*
For loop:

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} 
*/

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element===5)
    console.log("5 is best number");
    console.log(element);
    
} 

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop: ${i}`);
    for (let j = 0; j <=10; j++) {
        console.log(`Inner loop: ${i} ${j}`);
        
    }
}

let myArray=["flash","batman","superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);   
}

/*-------------------BREAK & CONTINUE--------------------- */

for (let index = 1; index <=20; index++) {
    if(index===5)
    {
        console.log(`Detected 5`);
        break;
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <=20; index++) {
    if(index===5)
    {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);
    
}