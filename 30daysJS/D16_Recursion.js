// Factorial of number

function factorial(n){
    if(n===1)
        return 1;
    return n * factorial(n-1)
}

console.log(factorial(5));

// Fibonacci number

function fibonacci(n){
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(4));