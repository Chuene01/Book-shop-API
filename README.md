# Book Shop API (Node.js)

## Project Overview
This project is a Node.js REST API for a book shop.  
It supports book retrieval, user registration and login, user-owned reviews, and demonstrates different asynchronous programming techniques using Axios.

---

## Tech Stack
- Node.js
- Express.js
- Axios
- body-parser

---

## Project Structure

BOOK-SHOP-API/
│── app.js
│── asyncMethods.js
│── package.json
│── package-lock.json
│── node_modules/
│
├── routes/
│ ├── books.js
│ ├── users.js
│ └── reviews.js
│
├── data/
│ ├── books.js
│ └── users.js
│
└── README.md


---

## API Endpoints

### General Users

#### Task 1: Get all books
- **GET** `/books`

#### Task 2: Get book by ISBN
- **GET** `/books/isbn/:isbn`

#### Task 3: Get books by author
- **GET** `/books/author/:author`

#### Task 4: Get books by title
- **GET** `/books/title/:title`

#### Task 5: Get book reviews
- **GET** `/books/:isbn/reviews`

---

### User Management

#### Task 6: Register new user
- **POST** `/users/register`

#### Task 7: Login user
- **POST** `/users/login`

---

### Registered Users

#### Task 8: Add or modify a book review
- **PUT** `/reviews/:isbn`

#### Task 9: Delete a book review
- **DELETE** `/reviews/:isbn`

---

## Async Programming Tasks (Node.js + Axios)

The file `asyncMethods.js` demonstrates different asynchronous programming techniques using Axios to consume the Book Shop API.

- **Task 10:** Get all books using async callback
- **Task 11:** Search book by ISBN using Promises
- **Task 12:** Search books by author using async/await
- **Task 13:** Search books by title using async/await

---

## Running the Project

### Install dependencies
```bash
npm install

Start the server
npm run dev


The server runs on:

http://localhost:3000

Notes

Data is stored in memory for simplicity.

No database is used.

This project focuses on backend logic and asynchronous programming concepts.