class User{
    constructor(username){
        this.username=username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const alex=new User("Alex");
// console.log(alex.createId()); // this method is static

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email=email;
    }

}

const john =new Teacher("john","j@teacher.com");
console.log(john);
john.logMe();
// console.log(john.createId());