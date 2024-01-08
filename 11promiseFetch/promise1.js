/*

const promiseOne= new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network calls
});

*/

const promiseOne= new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve();
    },1000)
});

promiseOne.then(function(){
    console.log('Promise consumed');
})

/*------------------------------------------------- */

new Promise(function (resolve,reject) {
    setTimeout(()=>{
        console.log('Async task 2');
        resolve();
    },1000)
}).then(function(){
    console.log('Promise consumed');
})

/*------------------------------------------------- */

const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:"alex",email:"alex@gmail.com"});
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

/*------------------------------------------------- */

const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"john",email:"john@gmail.com"});
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("The promise is either resolved/rejected");
})

/*------------------------------------------------- */

const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"js",password:"123"});
        }
        else{
            reject('ERROR: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
   try{
     const response=await promiseFive;
     console.log(response);
}
    catch(error){
     console.log(error);
}
}

consumePromiseFive();

/*-------------------------Fetch-Async-Await------------------------ */

async function getData(){
    try {
        const response= await fetch('https://api.github.com/users/pritha004');
        const data=await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error');
    }
    
}

getData();

/*--------------------------Fetch-then-catch----------------------- */

fetch('https://api.github.com/users/pritha004')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log('Error in fetch'))