//Converts string to number
console.log("2">1); //true

// The reason is that an equality check == and comparisons >,<,>=,<= wprkd different.
// Comparisons convert null to a number, treating it as 0.
console.log(null>0); // 0>0 false
console.log(null==0);// null==0 false
console.log(null>=0);// 0>=0 true