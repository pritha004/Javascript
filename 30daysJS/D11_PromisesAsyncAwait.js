// Understanding Promises

 const promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is the resolved message after 2 seconds.");
    }, 2000);
  });
  
// promise1.then((message) => {
//     console.log(message);
//   });

// const promise2= new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         reject("This is the rejected message after 2 seconds.");
//       }, 2000);
// })
  
// promise2.then((message)=>{
// }).catch((message)=>{
//     console.log(message);
// })



// Chaining Promises

const fetchData = (data, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// fetchData("Fetching user data...", 1000)
//   .then((message1) => {
//     console.log(message1);
//     return fetchData("Fetching posts data...", 2000);
//   })
//   .then((message2) => {
//     console.log(message2);
//     return fetchData("Fetching comments data...", 1500);
//   })
//   .then((message3) => {
//     console.log(message3);
//     console.log("All data fetched successfully.");
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });


// Async-Await

  const fetchMessage = (val) => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        if(val==="res")
        resolve("This is the resolved message.");
        else
        reject("This is a error.")
      }, 2000);
    });
  };

  const logResolvedMessage = async () => {
    try {
      const message = await fetchMessage("rej");
      console.log(message);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  
  logResolvedMessage();


// Fetching data from an API

  fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

  const getPost=async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data= await response.json()
    console.log(data);
  }

   getPost();

// Concurrent Promises

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is the resolved message after 4 seconds.");
  }, 4000);
});

Promise.all([promise1,promise3])
.then((messages)=>{
  messages.map((msg)=>console.log(msg))
})
.catch((error)=>{
  console.error('An error occurred:',error)
})

Promise.race([promise1,promise3])
.then((msg)=>console.log("Race: ", msg))
.catch((error)=>{
  console.error('An error occurred:',error)
})

