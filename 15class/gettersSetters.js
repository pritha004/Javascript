class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }

    get password(){
        return `${this._password}hello`
    }

    set password(value){
        this._password=value;
    }
}

const alex=new User("alex@g.com","abc");
console.log(alex);
console.log(alex.password);