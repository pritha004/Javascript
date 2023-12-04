let a="33abc";
let b=true;

console.log(Number(a), typeof Number(a));
console.log(Number(b), typeof Number(b));
console.log(Number(undefined), typeof Number(undefined));
console.log(Number(null), typeof Number(null));

//Number()
// "33"=>33(type number)
//"33abc"=>NaN(type number)
//true=>1, false=>0 (type number)
//undefined=>NaN(type number)
//null=>0(type number)

let isLogged=1;
let booleanIsLogged=Boolean(isLogged);
console.log(booleanIsLogged);

//Boolean()
//1=> true, 0=>false
//"hello"=>true, ""=>false

//String()