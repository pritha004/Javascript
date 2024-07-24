// Basic Error Handling with Try-Catch

const func1=()=>{
    try {
        throw new Error("caught an error.")
    } catch (error) {
        console.log(error);
    }
}
//func1();

const func2=(num1,num2)=>{
    try {
        if(num2===0)
            throw new Error("Division by 0")
        const val=num1/num2;
        console.log(val);
    } catch (error) {
        console.error(error);
    }
}
//func2(12,0);

// Finally Block

const func3=()=>{
    try {
        throw new Error();
        console.log("try block");
    } catch (error) {
        console.log("catch block");
    } finally{
        console.log("finally block");
    }
}
func3();

// Custom Error Objects

class CustomError extends Error {
    constructor(message) {
      super(message); 
      this.name = "CustomError"; 
    }
  }
  
function riskyOperation() {
    try {
        const errorCondition = true;
  
        if (errorCondition) {
        throw new CustomError("Something went wrong in the risky operation.");
        }
        return "Operation completed successfully.";
    } catch (error) {
        if (error instanceof CustomError) {
          console.error(`Custom Error caught: ${error.message}`);
        } else {
          console.error(`Unexpected error caught: ${error.message}`);
        }
      }
}
//riskyOperation();
  
function userValidate(val){
    if(val && val!==""){
        return val;
    }else{
        throw new CustomError("Value is not present.")
    }
}
//userValidate("");

// Error Handling in Promises

const promise=new Promise((res,rej)=>{
    const random=Math.floor(Math.random()*2);
    if(random===0){
        res("Resolved")
    }else{
        rej("Rejected");
    }
})

// promise.then((val)=>{
//     console.log(val);
// }).catch((val)=>{
//     console.log("error", val);
// })

const func=async()=>{
    try {
        const val=await promise;
        console.log(val);
    } catch (error) {
        console.log(error);
    }
}
func();

// Error Handling in Fetch

fetch('https://jsonplaceholder.typicode.co/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error)=>console.log(error))

const getPost=async()=>{
    try {
        const response= await fetch('https://jsonplaceholder.typicode.co/posts/1');
        const data= await response.json()
        console.log(data);
    } catch (error) {
        console.log(error);
    }
  }
getPost();
