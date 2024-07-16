// For loop
console.log("For:");
for (let index = 1; index <= 10; index++) {
    console.log(index);
}

for (let index = 1; index <= 10; index++) {
    console.log(`5 X ${index} = ${index*5} `);;
}

//While loop
console.log("While:");
let i=1;
let sum=0;
while (i<=10) {
    sum+=i;
    i++;
}
console.log(sum);

i=10;
while (i>0) {
    console.log(i);
    i--;
}

//Do-while loop
console.log("Do-while:");
i=1;
do {
    console.log(i);
    i++;
} while (i<=5);

i=5;
fac=1;
do {
    fac*=i;
    i--; 
} while (i>0);
console.log("Factorial ",fac);

//Nested loop
console.log("Nested loop:");
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}


//Continue statement
console.log("Continue statement:");
for (let index = 1; index <= 10; index++) {
    if(index===5)
        continue;
    console.log(index);
}

//Break statement
console.log("Break statement:");
for (let index = 1; index <= 10; index++) {
    if(index===7)
        break;
    console.log(index);
}