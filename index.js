class Book {
  constructor(title, author, pages, status = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  
}

class Library {
  constructor() {
    this.collection = [];
  }

  get collection() {
    return this._collection;
  }

  set collection(value) {
    this._collection = value;
  }

  addBook(newTitle, newAuthor, newPages, newStatus = false) {
    let newBook = new Book(newTitle, newAuthor, newPages, newStatus);

    this.collection.push(newBook);
  }

  removeBook = e => {
    let bookId = e.target.parentElement.id;
  
    this.collection.splice(bookId, 1);
  
    displayBook();
  }

  changeStatus = e => {
    let bookId = e.target.parentElement.id;
    
    this.collection[bookId].status = this.collection[bookId].status === true ? false : true;
    
    displayBook();
  }
}

let myLibrary = new Library();

const bookContainer = document.getElementById('book-container');
const newBookBtn = document.getElementById('add-book');
const newBookForm = document.getElementById('new-book-form');

function clearContainer(){
  while(bookContainer.hasChildNodes()){
    Array.from(bookContainer.childNodes).forEach(child => {
      bookContainer.removeChild(child);
    })
  }
}

function displayBook(){
  clearContainer();

  myLibrary.collection.forEach((book, index) => {
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
    
    let status = document.createElement('button');
    status.classList.add('status', 'btn');
    status.innerText = book.status? 'read' : 'not read' ;
    status.addEventListener('click', myLibrary.changeStatus);
    bookDiv.appendChild(status);

    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'remove';
    removeBtn.classList.add('remove', 'btn');
    removeBtn.addEventListener('click', myLibrary.removeBook);
    bookDiv.appendChild(removeBtn);
    
    bookDiv.id = index;
    bookContainer.appendChild(bookDiv);
  })
}


displayBook();



newBookBtn.addEventListener('click', event => {
  newBookForm.classList.toggle('hidden');
  newBookForm.classList.toggle('display');
})

newBookForm.addEventListener('submit', event => {
  event.preventDefault();
  
  let newTitle = document.getElementById('book-title').value;
  let newAuthor = document.getElementById('book-author').value;
  let newPages = document.getElementById('book-pages').value;
  let newStatus = document.getElementById('book-status').value === 'true' ? true : false;
  
  newBookForm.reset();
  newBookForm.classList.toggle('display');
  newBookForm.classList.toggle('hidden');

  myLibrary.addBook(newTitle, newAuthor, newPages, newStatus);

  displayBook();

})