const changeQuotesBtn = document.getElementById("new-quote_btn");
const quote = document.getElementById("quote").lastChild;
const author = document.getElementById("author").lastChild;

const quotes = [
  {
    quote: " Life is really simple, but we insist on making it complicated.",
    author: " Confucius"
  },
  {
    quote: " I attribute my success to this: I never gave or took any excuse.",
    author: " Florence Nightingale"
  },
  {
    quote: " Doing the best at this moment puts you in the best place for the next moment.",
    author: " Oprah Winfrey"
  },
  {
    quote: " Trust yourself. You know more than you think you do.",
    author: " Benjamin Spock"
  },
  {
    quote: " No one can make you feel inferior without your consent.",
    author: " Eleanor Roosevelt"
  },
  {
    quote: " It is never too late to be what you might have been.",
    author: " George Eliot"
  },
];

changeQuotesBtn.addEventListener("click", changeQuote);

function changeQuote() {
  const index = Math.floor(Math.random() * 6);
  const newQuote = quotes[index].quote;
  const theAuthor = quotes[index].author;
  quote.textContent = newQuote;
  author.textContent = theAuthor;
};

