//Dates

let myDate=new Date(); // date type is object
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleString('default',{
    weekday:"long",
}));
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

let myNewDate=new Date(2023,1,23); //1=Feb, months start from 0
console.log(myNewDate.toDateString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);