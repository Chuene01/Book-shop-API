const express = require("express");
const router = express.Router();
const users = require("../data/users");

/**
 * Task 6: Register new user
 */
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  // Basic validation
  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  // Check if user already exists
  const exists = users.find(user => user.username === username);
  if (exists) {
    return res.status(409).json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.status(201).json({ message: "User registered successfully" });
});

/**
 * Task 7: Login user
 */
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful", username });
});

module.exports = router;
