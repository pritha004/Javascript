// Template literals

const person={
    name:"Alex",
    age:25
}
console.log(`${person.name} is ${person.age} years old.`);

console.log(`string text line 1
string text line 2`);

// Destructuring

const num=[1,2,3,4,5];
const [first,second]=num;
console.log(first,second);

const book={
    title:"Harry Potter and Chamber of Secrets",
    author:"J.K Rowling",
    year:"1996"
}
const {title,author}=book;
console.log(title,author);

// Spread and rest operators

/*
Spread Operator
The spread operator is used to spread the elements of an array (or properties of an object) into a new array or object. It allows you to expand an iterable (like an array) into individual elements.

*/

const newNum=[...num,6 ]; //spread operator
console.log(newNum);

/*
Rest Operator
The rest operator is used to collect multiple elements into a single array (or object). It allows you to capture all remaining elements into a single parameter in function definitions, destructuring assignments, etc.

*/

function sum(...num){ //rest operator 
    let sum=0;
    num.forEach(element => {
        sum+=element;
    });
    return sum
}
console.log(sum(1,2,3));
console.log(sum(10,20,30,40,50));

// Enhanced Object literals

/*
Enhanced object literals in JavaScript provide a more concise and expressive syntax for defining object properties and methods.Three major ways it does this are :

1. It provides a shorthand syntax for initializing properties from variables.
2. It provides a shorthand syntax for defining function methods.
3. It enables the ability to have computed property names in an object literal definition.
*/

const name = 'John Doe';
const age = 30;

const man = {
  // Property shorthand
  /**
   Before in ES5:
   name:name,
   age:age
   */
  name,
  age,
  
  // Method definition shorthand
  /*
  Before in ES5:
  greet : function() {
                ...
            }
  */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  },
  
  // Computed property name
  ['isAdult']: age >= 18
};

// Logging the object
console.log(man);

// Calling the method
man.greet();
