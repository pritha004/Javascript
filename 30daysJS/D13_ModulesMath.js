export function addNumbers(a, b) {
    return a + b;
}

export const person={
    name:"Alex",
    age:26,
    display(){
        console.log(this.name,"is",this.age,"years old.");
    }
}