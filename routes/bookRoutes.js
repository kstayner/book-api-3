const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Book CRUD Operations
router.post('/books', bookController.createBook); // Create a book
router.get('/books', bookController.getBooks); // List all books
router.get('/books/author/:authorId', bookController.getBooksByAuthor); // Get books by author
router.get('/books/:id', bookController.getBookById); // Get a book by ID
router.put('/books/:id', bookController.updateBook); // Update a book
router.delete('/books/:id', bookController.deleteBook); // Delete a book

module.exports = router;
