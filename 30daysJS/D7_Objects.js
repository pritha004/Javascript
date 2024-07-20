// Object creation and access

const book={
    title:"Harry Potter and Chamber of Secrets",
    author:"J.K Rowling",
    year:"1996"
}
console.log(book);
console.log(book.title, "is wriiten by",book.author);

// Object Methods and this keyword

book.display=function(){ // Arrow func does not have access to this, so we are not using it
    console.log(this.title,"is wriiten by",this.author);
}
book.display();

book.updateYear=function(year){ 
    this.year=year;
    console.log(this);
}
book.updateYear(2000);

// Nested Objects

const library={
    name:"Eastern Library",
    books:[
        {
            title:"Harry Potter and Chamber of Secrets",
            author:"J.K Rowling",
            year:"1996"
        },
        {
            title:"Harry Potter and the Order of Phoenix",
            author:"J.K Rowling",
            year:"2001"
        }
    ]
}
console.log(library);
console.log(library.name);
library.books.map((book)=>console.log(book.title));

// Object iteration

for (const key in book) {
    console.log(key,":",book[key]);
}

console.log(Object.keys(book));
console.log(Object.values(book));