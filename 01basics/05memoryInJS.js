/*
Stack memory: Primitive datatype is stored
Heap memory: Non primitive datatype is stored
*/

let name="Alex";
let anotherName=name;
anotherName="Peter";
console.log(name,anotherName);

let user1={
    email:"user@google.com",
    upi:"user@ybl"
}
let user2=user1;
user2.email="changed@gogle.com"
console.log(user1,user2);