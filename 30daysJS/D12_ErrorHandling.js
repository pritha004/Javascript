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
func2(12,0);

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
  