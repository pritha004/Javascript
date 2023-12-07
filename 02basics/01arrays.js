//arrays
const myArr=[0,1,2,3,4,5]
const myArr2=["hello","world"]
const myArr3=new Array(1,2,3,4)
console.log(myArr[0]);

//array methods
myArr.push(6)//adds element at end
myArr.push(7,8)
myArr.pop()
myArr.unshift(6)//adds element at first
myArr.shift()
console.log(myArr);

// myArr.push(myArr2)
console.log(myArr); //[ 0, 1, 2, 3, 4, 5, 6, 7, [ 'hello', 'world' ]]

const allArr=myArr.concat(myArr2)
console.log(allArr);

//spread operator
const allNew=[...myArr,...myArr2]
console.log(allNew);

//Convert to array
console.log(Array.isArray("hello"));
console.log(Array.from("hello"));
console.log(Array.from({name:"hello"})); // returns [] as it cant make an array out of the object

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));