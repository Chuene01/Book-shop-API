const axios = require("axios");

// Task 10: Async callback
async function getAllBooks(callback) {
  try {
    const res = await axios.get("http://localhost:3000/books");
    callback(null, res.data);
  } catch (err) {
    callback(err, null);
  }
}

// Task 11: Promises
function getBookByISBN(isbn) {
  return axios.get(`http://localhost:3000/books/isbn/${isbn}`)
    .then(res => res.data);
}

// Task 12: Async/Await
async function getBooksByAuthor(author) {
  const res = await axios.get(`http://localhost:3000/books/author/${author}`);
  return res.data;
}

// Task 13: Async/Await
async function getBooksByTitle(title) {
  const res = await axios.get(`http://localhost:3000/books/title/${title}`);
  return res.data;
}

module.exports = {
  getAllBooks,
  getBookByISBN,
  getBooksByAuthor,
  getBooksByTitle
};

