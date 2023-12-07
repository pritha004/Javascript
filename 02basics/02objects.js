//singleton-objects created by constructor-Object.create
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