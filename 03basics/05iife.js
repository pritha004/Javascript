// Immediately Invoked Function Expression (IIFE)

(function one(){ //named iife
    console.log(`DB Connected`);
})(); // ; is neeed when to stop execution of iife

((name)=>{ //unnamed iife, parameter iife
    console.log(name);
})("alex");