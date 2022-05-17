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
  console.log(myLibrary);
}

function displayBook(){
  myLibrary.forEach(book => {
    let bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    let title = document.createElement('h2');
    title.innerText = `${book.title}`;
    bookDiv.appendChild(title);

    let author = document.createElement('p');
    author.innerText = `by ${book.author}`;
    bookDiv.appendChild(author);
    
    let pages = document.createElement('p');
    pages.innerText = `${book.pages} pages`;
    bookDiv.appendChild(pages);
    
    let read = document.createElement('p');
    read.innerText = book.read? 'Already read' : 'Haven\'t read yet' ;
    bookDiv.appendChild(read);

    bookContainer.appendChild(bookDiv);
  })
}

function clearContainer(){
  while(bookContainer.hasChildNodes()){
    Array.from(bookContainer.childNodes).forEach(child => {
      bookContainer.removeChild(child);
    })
  }
}

displayBook();

const newBookBtn = document.getElementById('add-book');
const newBookForm = document.getElementById('new-book-form');

newBookBtn.addEventListener('click', event => {
  newBookForm.classList.toggle('hidden');
})

const newTitle = document.getElementById('book-title');
const newAuthor = document.getElementById('book-author').value;
const newPages = document.getElementById('book-pages').value;
const newRead = document.getElementById('book-read').value;

newBookForm.addEventListener('submit', event => {
  event.preventDefault();

  addBookToLibrary(newTitle, newAuthor, newPages, newRead);
  // console.log(myLibrary);
  clearContainer();
  displayBook();
  // console.log(newRead.value);
})