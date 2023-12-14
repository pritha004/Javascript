/*

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/

const month=2;

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break; // important : if we dont use break, fall through will happen and execute all below cases except default
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("No match");
        break;
}