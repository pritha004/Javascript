const user={
    username:"alex",
    price:999,
    welcomeMsg:function(){
        console.log(`${this.username}, welcome to website...`); // this is accessible only in object
        console.log(this);
    }
}

// user.welcomeMsg();
// user.username="sam";
// user.welcomeMsg();

// console.log(this);// {} ->in node environment ;; window->in browser

function chai(){
    let one="one"
    console.log(this.one); // undefined, cant access this in function
}

// chai();

/*------------------------Arrow Function-------------------- */

const one=()=>{
    let username="alex";
    console.log(this); // {}
}

// one()

const two=(num1,num2)=>{
    return num1+num2;
}

const three=(num1,num2)=> num1+num2; //implicit return: we dont use paranthesis and return keyword, one statement in the function
const four=(num1,num2)=> (num1+num2); // another way of implicit return
const five=()=> ({name:"alex"}); // to return object in implicit return, we need ()

// console.log(two(2,5));

