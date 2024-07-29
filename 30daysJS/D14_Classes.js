// Class, Inheritance, Static method and property

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`Hi, ${this.name}`);
    }

    updateAge(newAge){
        this.age=newAge;
        console.log(`${this.name} is ${this.age} years old.`);
    }

    static greeting(){
        return ("Helllo!!");
    }
}

const alex=new Person("Alex",24);
alex.display();
alex.updateAge(26);

class Student extends Person{
    static studentCount=0;
    constructor(name,age,studentId){
        super(name,age);
        this.studentId=studentId;
        Student.studentCount++;
    }

    logStudentId() {
        console.log(`Student ID: ${this.studentId}`);
    }

    display(){
        console.log(`Hi, ${this.name}. Student ID: ${this.studentId}`);
    }
}

const john=new Student("John",26,4);
john.logStudentId();
john.display();
console.log( Person.greeting());
console.log(Student.studentCount);

const john1=new Student("John",26,4);
console.log(Student.studentCount);

console.log(alex.name);


// Getter and Setter methods

class Man {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(newName) {
        this._name = newName;
    }

    // Getter for age
    get age() {
        return this._age;
    }

    // Setter for age
    set age(newAge) {
        this._age = newAge;
    }

}

const x=new Man("X",23);
console.log(x.name,x.age);
x.name="Y";
x.age=60;
console.log(x.name,x.age);


// Private field

class Account {
    // Private field for balance
    #balance;

    constructor(initialBalance = 0) {
        this.#balance = initialBalance;
    }

    // Method to deposit money into the account
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Deposit amount must be positive');
        }
    }

    // Method to withdraw money from the account
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Withdrew: $${amount}. New balance: $${this.#balance}`);
        } else {
            console.log('Withdrawal amount must be positive and cannot exceed the balance');
        }
    }

    // Method to get the current balance
    getBalance() {
        return this.#balance;
    }
}

const myAccount=new Account(100);

myAccount.deposit(50);
myAccount.withdraw(30);
myAccount.withdraw(200);

console.log(`Current balance: $${myAccount.getBalance()}`);