const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");

console.log(descriptor);
console.log("-------------------------------------");

const alex={
    name:"alex",
    age:25,
    isAvailable:true
}

console.log(alex);
console.log(Object.getOwnPropertyDescriptor(alex,"name"));

for (let [key,value] of Object.entries(alex)) {
    console.log(`${key}: ${value}`);
}

Object.defineProperty(alex,"name",{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(alex,"name"));

for (let [key,value] of Object.entries(alex)) {
    console.log(`${key}: ${value}`);
}