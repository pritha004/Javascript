const User={
    _email:'h@h.com',
    _password:"abc",

    get email(){
        return this._email.toUpperCase();
    },

    set email(value){
        this._email=value;
    }
}

const alex=Object.create(User);
console.log(alex.email);