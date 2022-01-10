import Book from './modules/Book.js';

const submit = document.querySelector('form');

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  Book.addBookMethod();
});

Book.displayBooks();

const list = document.getElementById('list-link');
const add = document.getElementById('add-link');
const contact = document.getElementById('contact-link');

list.addEventListener('click', () => {
  Book.listSection();
});
add.addEventListener('click', () => {
  Book.bookForm();
});
contact.addEventListener('click', () => {
  Book.contactSection();
});
