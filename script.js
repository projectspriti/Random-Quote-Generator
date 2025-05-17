// let quote = document.getElementById("quote");
// let author = document.getElementById("author");
// let btn = document.getElementById("btn");


// const url = "https://api.quotable.io/random";


// const url = "https://api.api-ninjas.com/v1/quotes";


// let getQuote = () => {
//     fetch(url)
//         .then(data => data.json())
//         .then((item) => {
//             console.log(item.content);

//             console.log(item.author);
//             quote.innerText=item.content;
//             author.innerText=item.author

//         });
// };

// window.addEventListener("load",getQuote);

// btn.addEventListener("click",getQuote);







let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://dummyjson.com/quotes/random";

let getQuote = () => {
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data.content);
            console.log(data.author);
            quote.innerText = data.quote;
            author.innerText = data.author;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
            quote.innerText = "Failed to fetch quote.";
            author.innerText = "";
        });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);
