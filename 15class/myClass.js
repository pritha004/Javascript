class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const alex=new User("alex","alex@gmail.com","123");
console.log(alex.encryptPassword());
console.log(alex.changeUsername());

//Behind the scene of the "class" keyword used, the below happens:---------------------

// function User(username,email,password) {
//         this.username=username;
//         this.email=email;
//         this.password=password;
// }

// User.prototype.encryptPassword=function(){
//     return `${this.password}abc`
// }

// const john=new User("john","john@gmail.com","123");
// console.log(john);
// console.log(john.encryptPassword());