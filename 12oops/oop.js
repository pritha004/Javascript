const user={
    username:"alex",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`Username ${this.username}`);
        console.log(this);
    }
}

console.log(this);

function User(username,loginCount,isLoggedIn){
    this.username=username,
    this.loginCount=loginCount,
    this.isLoggedIn=isLoggedIn,

    this.greetings=function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const user1= new User("alex",12,true);
const user2= new User("john",11,false);
console.log(user1.constructor);
