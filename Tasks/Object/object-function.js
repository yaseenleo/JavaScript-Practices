let myBook = {
    title: "1928",
    author: "affan khan",
    pageCount: 349
}

let anotherBook = {
    title: "rich dad poor dad",
    author: "robert kuwaski",
    pageCount: 456,
}

// console.log(`${myBook.title} by ${myBook.author}`)

let bookSet = function(book){
    return{
        summary: `the book ${book.title} is written by ${book.author}`,
        pageSummary: `the book ${book.title} has ${book.pageCount} pages`
    }
}

bookSet(myBook);
bookSet(anotherBook);

// Challenge area
// Create function - take fahrenheit in  - return object with all three

let convertFahrenheit = function(fahrenheit) {
    return{
        fahrenheit: fahrenheit,
        celcius: (fahrenheit - 32 ) * 5 / 9,
        kelvin: (fahrenheit - 32) * 5 / 9 + 273.15,
    }
}

let temp = convertFahrenheit(59)

console.log(temp)
console.log(temp.fahrenheit)
console.log(temp.celcius)
console.log(temp.kelvin)