/*
Falsy Values:
false
0
-0
BigInt 0n
""
null
undefined
NaN

Truthy Values: everything else
Special ones:
"0"
"false"
" "
[]
{}
function(){}

*/


const useremail=""; //falsy value

if(useremail){
    console.log("Got user email");
}else{
    console.log("No user email");
}

/*------------------Nullish Coalescing Operator------------------------- */

/*

Nullish Coalescing Operator (??): null undefined

*/

let val1;
// val1=5 ?? 10;
// val1=null ?? 10;
// val1=undefined ?? 10;
val1=null ?? 10 ?? 20;
console.log(val1);

/*------------------Ternary Operator------------------------- */

/*

condition ? true : false

*/

const iceTeaPrice=100;
iceTeaPrice>=80?console.log("more than 80"):console.log("less than 80");