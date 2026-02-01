const express = require("express");
const router = express.Router();
const books = require("../data/books");

/**
 * Task 1: Get all books
 */
router.get("/", (req, res) => {
  res.json(books);
});

/**
 * Task 2: Get book by ISBN
 */
router.get("/isbn/:isbn", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book);
});

/**
 * Task 3: Get books by author
 */
router.get("/author/:author", (req, res) => {
  const author = req.params.author.toLowerCase();

  const result = Object.values(books).filter(
    book => book.author.toLowerCase() === author
  );

  res.json(result);
});

/**
 * Task 4: Get books by title
 */
router.get("/title/:title", (req, res) => {
  const title = req.params.title.toLowerCase();

  const result = Object.values(books).filter(
    book => book.title.toLowerCase() === title
  );

  res.json(result);
});

/**
 * Task 5: Get reviews (KEEP THIS LAST)
 */
router.get("/:isbn/reviews", (req, res) => {
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  res.json(book.reviews);
});

module.exports = router;
