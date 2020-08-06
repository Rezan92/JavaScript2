/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  const ul = document.createElement("ul");
  ul.style.display = "flex";
  ul.style.flexWrap = "wrap";
  ul.style.listStyleType = "none";

  books.forEach(book => {
    const li = document.createElement("li");
    const p = document.createElement("p");
    const img = document.createElement("img");

    li.style.width = "calc(25% - 51px)";
    li.style.margin = "15px";
    li.style.padding = "10px";
    li.style.minWidth = "350px";
    img.style.width = "200px";

    if (book.author === "Don Norman") {
      img.setAttribute("src", "https://media.s-bol.com/7ov383lj3Rr/800x1200.jpg");
      li.style.backgroundColor = "red";
    } else if (book.author === "Brian Christian") {
      img.setAttribute("src", "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg");
      li.style.backgroundColor = "green";
    } else {
      img.setAttribute("src", "https://media.s-bol.com/34489jXEA8x/550x718.jpg");
      li.style.backgroundColor = "#005e80";
    }

    p.textContent = `${book.title} - ${book.author}`
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);
  });

  return ul;
};

const books = [{
  title: 'The Design of Everyday Things',
  author: 'Don Norman',
  alreadyRead: false
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
},
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  alreadyRead: true
}
];
let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);