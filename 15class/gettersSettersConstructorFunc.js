function User(email,password) {
    this._email=email;
    this._password=password;
    
    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase();
        },
        set: function(value){
            this._email=value
        }
    })
}

const alex=new User("alex@g.com","abc");
console.log(alex);
console.log(alex.email);