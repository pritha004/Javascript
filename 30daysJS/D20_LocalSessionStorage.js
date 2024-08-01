window.localStorage.setItem("localStorage1","Hello");
console.log(window.localStorage.getItem("localStorage1"));

window.localStorage.setItem("localStorage2",JSON.stringify({"a":1,"b":2}));
console.log(JSON.parse(window.localStorage.getItem("localStorage2")));

window.sessionStorage.setItem("sessionStorage1","Hello Session");
console.log(window.sessionStorage.getItem("sessionStorage1"));

window.sessionStorage.setItem("sessionStorage2",JSON.stringify({"a":1,"b":2}));
console.log(JSON.parse(window.sessionStorage.getItem("sessionStorage2")));