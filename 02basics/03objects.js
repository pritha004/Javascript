//Destructuring of objects

const course={
    courseName:"Js",
    price:"999",
    instructor:"Alex"
}

const {courseName:name,price,instructor}=course;
console.log(name);
console.log(price);

