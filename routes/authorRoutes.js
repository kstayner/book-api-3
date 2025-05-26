const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Author CRUD Operations
router.post('/authors', authorController.createAuthor); // Create an author
router.get('/authors', authorController.getAuthors); // List all authors
router.get('/authors/:id', authorController.getAuthorById); // Get an author by ID
router.put('/authors/:id', authorController.updateAuthor); // Update an author
router.delete('/authors/:id', authorController.deleteAuthor); // Delete an author

module.exports = router;
