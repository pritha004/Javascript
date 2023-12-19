//for each

const coding=["js","java","cpp"];

coding.forEach(element => {
    console.log(element);
});

/*------------------------------------------- */

function printMe(item){
    console.log("Print "+item);
}
coding.forEach(printMe)

/*------------------------------------------- */

coding.forEach((item,index,arr)=>
    {
        console.log(item,index,arr);
    }
)

/*------------------------------------------- */

const myCoding=[
    {
        name:"javascript",
        file:"js"
    },
    {
        name:"java",
        file:"java"
    },
    {
        name:"python",
        file:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item);
})