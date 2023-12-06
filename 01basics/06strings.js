//String interpolation

const repoCount=50;
const name="Alex";
console.log(`Hello ${name}, repo count is ${repoCount}`);
console.log(name);// Alex

const gameName=new String("alex-sc")
console.log(gameName);// [String: 'alex-sc']
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

const newString=gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-6,4);
console.log(anotherString);
console.log(gameName.includes("-"));

const x="qw-er-tt-yu-ui-ii";
console.log(x.split("-"));
