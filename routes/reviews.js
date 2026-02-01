const express = require("express");
const router = express.Router();
const books = require("../data/books");

/**
 * Task 8: Add or modify a book review
 * Body: { username, review }
 */
router.put("/:isbn", (req, res) => {
  const { username, review } = req.body;
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (!username || !review) {
    return res.status(400).json({ message: "Username and review required" });
  }

  book.reviews[username] = review;
  res.json({ message: "Review added/updated" });
});

/**
 * Task 9: Delete review added by that particular user
 * Body: { username }
 */
router.delete("/:isbn", (req, res) => {
  const { username } = req.body;
  const book = books[req.params.isbn];

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  if (!book.reviews[username]) {
    return res.status(404).json({ message: "Review not found for this user" });
  }

  delete book.reviews[username];
  res.json({ message: "Review deleted" });
});

module.exports = router;
