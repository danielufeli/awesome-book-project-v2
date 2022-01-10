import Book from './modules/Book.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

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

function startTime() {
  const now = DateTime.now();
  document.getElementById('date').innerHTML = now.toLocaleString(
    DateTime.DATETIME_MED,
  );
  setTimeout(startTime, 1000);
}

startTime();