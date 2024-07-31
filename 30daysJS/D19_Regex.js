let pattern1 = /Javascript/g;

console.log("Javascript JS Javascript".match(pattern1));

let pattern2= /\d/g
console.log("abg12ghg673".match(pattern2));

const pattern3 = /\b[A-Z][a-z]*\b/g;
console.log("Alice went to Wonderland".match(pattern3))

let pattern4= /\d+/g
console.log("abg12ghg673".match(pattern4));


const text = "Contact me at (123) 456-7890 or at my office (987) 654-3210.";

const pattern5 = /\((\d{3})\)\s(\d{3})-(\d{4})/g;

const matches = text.matchAll(pattern5);
for (const match of matches) {
    console.log(match);
    console.log(`Full match: ${match[0]}`);
    console.log(`Area code: ${match[1]}`);
    console.log(`Central office code: ${match[2]}`);
    console.log(`Line number: ${match[3]}`);
}

const pattern6 = /([^@]+)@([^@]+).com/g;
const matches2="az.x@hgb.com".matchAll(pattern6);
for (const match of matches2) {
    console.log(match);
    console.log(`Full match: ${match[0]}`);
    console.log(`Username: ${match[1]}`);
    console.log(`Domain ${match[2]}`);
}

const pattern7 = /^\w+/;
console.log("Javascript is fun".match(pattern7));
console.log(" Javascript is fun".match(pattern7));

const pattern8 = /\w+$/;
console.log("Javascript is fun".match(pattern8));
console.log(" Javascript is fun .".match(pattern8));


function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return regex.test(password);
}

console.log(validatePassword("Password123!")); // true
console.log(validatePassword("password")); // false (no uppercase, no digit, no special character)
console.log(validatePassword("PASSWORD123")); // false (no lowercase, no special character)
console.log(validatePassword("Passw1!")); // false (less than 8 characters)
