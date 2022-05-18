let myLibrary = [
  {
    title: 'Four treasures of the sky',
    author: 'Jenny Zhang',
    pages: 326,
    read: false,
  },
  {
    title: 'Fresh water for flowers',
    author: 'Valerie Perrin',
    pages: 326,
    read: false,
  },
  {
    title: 'The Fervor: A Novel',
    author: 'Alma Katsu',
    pages: 326,
    read: false,
  },
  {
    title: 'Mickey 7: a novel',
    author: 'Edward Ashton',
    pages: 326,
    read: false,
  },
];

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

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBook(title, author, pages, status = false) {
  let newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
}

function displayBook(){
  clearContainer();

  myLibrary.forEach((book, index) => {
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
    status.addEventListener('click', changeStatus);
    bookDiv.appendChild(status);

    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'remove';
    removeBtn.classList.add('remove', 'btn');
    removeBtn.addEventListener('click', removeBook);
    bookDiv.appendChild(removeBtn);
    
    bookDiv.id = index;
    bookContainer.appendChild(bookDiv);
  })
}

function removeBook(e){
  let bookId = e.target.parentElement.id;

  myLibrary.splice(bookId, 1);

  displayBook();
}

function changeStatus(e){
  let bookId = e.target.parentElement.id;
  
  myLibrary[bookId].status = myLibrary[bookId].status === true ? false : true;
  
  displayBook();
}




displayBook();



newBookBtn.addEventListener('click', event => {
  newBookForm.classList.toggle('hidden');
})

newBookForm.addEventListener('submit', event => {
  event.preventDefault();
  
  let newTitle = document.getElementById('book-title').value;
  let newAuthor = document.getElementById('book-author').value;
  let newPages = document.getElementById('book-pages').value;
  let newStatus = document.getElementById('book-status').value === 'true' ? true : false;
  
  newBookForm.reset();
  newBookForm.classList.toggle('hidden');

  addBook(newTitle, newAuthor, newPages, newStatus);

  displayBook();

})