let myLibrary = [
  {
    title: 'Four treasures of the sky',
    author: 'Jenny Zhang',
    pages: 326,
    read: false
  },
  {
    title: 'Fresh water for flowers',
    author: 'Valerie Perrin',
    pages: 326,
    read: false
  },
  {
    title: 'The Fervor: A Novel',
    author: 'Alma Katsu',
    pages: 326,
    read: false
  },
  {
    title: 'Mickey 7: a novel',
    author: 'Edward Ashton',
    pages: 326,
    read: false
  },
];

const bookContainer = document.getElementById('book-container');

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages) {
  let newBook = new Book(title, author, pages);

  myLibrary.push(newBook);
}

function displayBook(){
  myLibrary.forEach(book => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    let title = document.createElement('h2');
    title.innerText = `Title: ${book.title}`;
    bookDiv.appendChild(title);

    let author = document.createElement('p');
    author.innerText = `Author: ${book.author}`;
    bookDiv.appendChild(author);
    
    let pages = document.createElement('p');
    pages.innerText = `Pages: ${book.pages}`;
    bookDiv.appendChild(pages);
    
    let read = document.createElement('p');
    read.innerText = book.read? 'Already read' : 'Haven\'t read yet' ;
    bookDiv.appendChild(read);

    bookContainer.appendChild(bookDiv);
  })
}

displayBook();