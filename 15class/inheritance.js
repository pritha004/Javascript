class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const john=new Teacher("john","john@teacher.com","123");
john.addCourse();
john.logMe();

const alex=new User("alex");
alex.logMe();

console.log(john instanceof Teacher);
console.log(john instanceof User);