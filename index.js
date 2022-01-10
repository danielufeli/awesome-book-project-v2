import Book from './modules/Book.js';
const submit = document.getElementById('btn-add');

submit.addEventListener('click', () => {
  Book.addBookMethod();
});

Book.displayBooks();
