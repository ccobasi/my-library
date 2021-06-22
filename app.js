let myLibrary = [];

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(newBook) {
  myLibrary.push(newBook);
}

function displayBook(newBook){
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${Book.title}</td>
    <td>${Book.author}</td>
    <td>${Book.pages}</td>
    <td><a href="#" class="btn btn-warning btn-sm ">Unread</a></td>
    <td><a href="#" class="btn btn-danger btn-sm delete"><i class="fas fa-trash"></a></td>`;

    list.appendChild(row);
}
    