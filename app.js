const submit = document.getElementById('submit');

const myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function displayBook(newBook) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${newBook.title}</td>
    <td>${newBook.author}</td>
    <td>${newBook.pages}</td>
    <td><a href="#" id="unread" class="btn btn-warning btn-sm unread">Unread</a></td>
    <td><a href="#" class="btn btn-danger btn-sm delete">Delete</a></td>`;

  list.appendChild(row);
}

const btnSuccess = document.createElement('td');
btnSuccess.textContent = 'Read';
btnSuccess.setAttribute('class', ' btn btn-success');

document.querySelector('#book-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.parentElement.remove();
  }
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('unread')) {
    e.target.setAttribute('class', ' btn btn-success');
    e.target.textContent = 'Read';
  } else if (e.target.classList.contains('btn-success')) {
    e.target.setAttribute('class', ' btn btn-warning');
    e.target.textContent = 'Unread';
  } else {
    e.target.setAttribute('class', ' btn btn-success');
    e.target.textContent = 'Read';
  }
});

function createBook(e) {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  e.preventDefault();

  function validateForm(title, author, pages) {
    let newBook;
    if (title === '' || author === '' || pages === '') {
      // eslint-disable-next-line no-alert
      alert('please fill all the form');
    } else {
      newBook = new Book(title, author, pages);
      addBookToLibrary(newBook);

      const bookObj = {
        title: newBook.title,
        author: newBook.author,
        pages: newBook.pages,
        read: newBook.read,
      };

      // Put the object into storage
      const bookIndex = localStorage.length === 0 ? 0 : localStorage.length;
      localStorage.setItem(bookIndex.toString(), JSON.stringify(bookObj));

      const form = document.getElementById('book-form');
      form.reset();
      displayBook(newBook);
    }
  }
  validateForm(title, author, pages);
}

submit.addEventListener('click', (e) => createBook(e));
