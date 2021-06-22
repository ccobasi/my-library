const submit = document.getElementById('submit');

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

    const deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    document.querySelector('#book-list').addEventListener('click',(e) => {
        myLibrary.deleteBook(e.target);
    })

}

function createBook(e) {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
  
    e.preventDefault();
  
    function validateForm(title, author, pages) {
      let newBook;
      if (title === '' || author === '' || pages === '') {
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
  
        const form = document.getElementById('form');
        form.reset();
        displayBook(newBook);
      }
    }
    validateForm(title, author, pages);
  }
  
  submit.addEventListener('click', (e) => createBook(e));
  


  
    