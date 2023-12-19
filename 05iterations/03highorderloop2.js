//for in: gives key for both objects and arrays(the indexes)

const myObj={
    js:"Javascript",
    cpp:"C++",
    rb:"Ruby"
}

for (const key in myObj) {
    console.log(key+":"+myObj[key]);
}

const programming=["js","cpp","java"];

for (const key in programming) {
    console.log(key);
}

const map=new Map();
map.set("IN","India");
map.set("US","USA");
map.set("FR","France");
map.set("IN","India");

// for (const key in map) { //maps are not iterable so gives no value
//     console.log(key);
// }