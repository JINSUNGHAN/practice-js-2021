const quotes = [
    {
        quote : "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Whatever you are, be a good one.",
        author : "Abraham Lincoln"
        },
    {
        quote: "You must be the change you wish to see in the world.",
        author: "Mahatma Ghandi"
    },
    {
        quote: "All that glitters is not gold.",
        author: "William Shakespear"
    },
    {
        quote: "All the world’s a stage, and all the men and women merely players.",
        author: "William Shakespear"
    },
    {
        quote: "Ask not what your country can do for you, ask what you can do for your country.",
        author: "John Kennedy"
    },
    {
        quote: "Gennius is one percent inspiration and ninety-nine persent perspiration.",
        author: "Thomas Edison"
    },
    {
        quote: "I think therefore I am.",
        author: "Rene Descartes"
    },
    {
        quote: "If at first you don't succeed, try, try again.",
        author: "W. E. Hickson"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author  = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;