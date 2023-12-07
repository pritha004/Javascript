//singleton-objects created by constructor-Object.create
const userSingleton=new Object();// singleton object


//object literals

const mySym=Symbol("key1")

const user={
    name:"Alex",
    "full name":"Alex Forbes", //cant use . notation, need t use [] notation
    age:18,
    [mySym]:"mykey1", //syntax to use a symbol as a key, [] is used
    location:"Jaipur",
    isLoggedIn:false,
    lastLoinDays:["Monday","Saturday"]
}

console.log(user.name);
console.log(user["name"]);
console.log(user["full name"]);
console.log(user[mySym]);
console.log(user);

user.name="Fluff"
console.log(user.name);

// Object.freeze(user);// to make an object fixed
user.name="Shin"
console.log(user);

user.greeting=function(){
    console.log("Hello user");
}

user.greeting2=function(){
    console.log(`Hello user, ${this["full name"]}`);
}

console.log(user.greeting);//returns function reference
console.log(user.greeting())//executes the function
console.log(user.greeting2())

/*--------------------------------------------- */
const tUser={}// non-singleton

tUser.id="123abc";
tUser.name="Alex";
tUser.isLoggedIn=false;

console.log(tUser);

const rUser={
    email:"alex@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Alex",
            lastname:"Forbes"
        }
    }
}

console.log(rUser.fullname.userfullname.lastname);

//Combining objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={...obj1,...obj2}
const obj4=Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj4);

console.log(tUser);
console.log(Object.keys(tUser));
console.log(Object.values(tUser));
console.log(Object.entries(tUser));

console.log(tUser.hasOwnProperty("isLoggedIn"));