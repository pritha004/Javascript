/*

if(conditions){

 }else if(condition){

 }else{
    
 }
 
 */

 /*----------------------------------------------------- */

 const isUserLoggedIn=false;

 if(isUserLoggedIn)
 {
    console.log("Logged in...");
 }else{
    console.log("No");
 }

 console.log("Execute always");
/*------------------------------------------------------ */
 const score=200;

 if(score>100)
 {
    const power="fly";
    console.log(`User power: ${power}`);
 }

//  console.log(`User power: ${power}`); //error->out of if scope

/*------------------------------------------------------ */

const balance=1000;

if(balance<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 750");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

/*------------------------------------------------------ */

