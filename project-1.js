let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      person: "John Lennon"
    },
    {
      quote: "In the end, it's not the years in your life that count. It's the life in your years.",
      person: "Abraham Lincoln"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "You must be the change you wish to see in the world.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "It is our choices that show what we truly are, far more than our abilities.",
      person: "J.K. Rowling"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "You miss 100% of the shots you don't take.",
      person: "Wayne Gretzky"
    }
  ];
  
 btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

 }) 

 console.log("end")
