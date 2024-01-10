
let myHeros=["thor","spiderman"]

let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function () {
        console.log(`Spiderman power is ${this.spiderman}`);
    }
}

Object.prototype.hello=function () {
    console.log(`Hello method injected in Object`);
}

heroPower.hello();
myHeros.hello();


Array.prototype.arrayHello=function () {
    console.log(`Hello method injected in Array`);
}

myHeros.arrayHello();
// heroPower.arrayHello(); // added only to Array, so not available in function

String.prototype.trueLength=function () {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

"hello".trueLength();
"hi         ".trueLength();


/*---------------------------------------------- */

//Inheritance
const User={
    name: "User"
}

const Teacher={
    makeVideo: true
}

const TeachingSupport={
    isAvailable: false
}

const TASupport={
    makeAssignment: "JS",
    fullTime: true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User; //This approach is not used anymore.

Object.setPrototypeOf(TeachingSupport, Teacher); // Preferred method