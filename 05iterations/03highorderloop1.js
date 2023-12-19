// for of

const arr=[1,2,3,4]
for (const val of arr) {
    console.log(val);
}

const str="hello";
for (const val of str) {
    console.log(val);
}

const myObj={
    'game1':"X",
    'game2':"Y"
}

// for (const game of myObj) { // gives error
//     console.log(game);
// }


//Maps: contains unique keys, remembers order of insertion

const map=new Map();
map.set("IN","India");
map.set("US","USA");
map.set("FR","France");
map.set("IN","India");

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key,":",value);
}