//Array creation and Access
let arr1=[1,2,3,4,5];
console.log(arr1);
console.log(arr1[0], " ", arr1[arr1.length-1]);

//Array Methods
arr1.push(6);
console.log(arr1);
arr1.pop();
console.log(arr1);
arr1.shift();
console.log(arr1);
arr1.unshift(1);
console.log(arr1);

// Doesnt change the original array and returns a new array/value
const doubledArr=arr1.map(num=>num*2);
console.log(doubledArr);

const evenArr=arr1.filter(num=>num%2===0);
console.log(evenArr);

const sumArr=arr1.reduce((acc,num)=>acc+=num,0);
console.log(sumArr);
console.log(arr1);

//Array Iteration
for (let index = 0; index < arr1.length; index++) {
    console.log(arr1[index]);
    
}

arr1.forEach(element => {
    console.log(element);
});

//Multi-dimensional Array
let arr2=[
        [1,2,3],
        [3,4,5]
]
console.log(arr2);
console.log(arr2[1][2]);