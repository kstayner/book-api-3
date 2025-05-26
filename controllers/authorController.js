const authorService = require('../services/authorService');

// Create an author
exports.createAuthor = async (req, res) => {
  try {
    const { name, nationality } = req.body;
    const newAuthor = await authorService.createAuthor(name, nationality);
    res.status(201).json(newAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all authors
exports.getAuthors = async (req, res) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get author by ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await authorService.getAuthorById(req.params.id);
    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an author
exports.updateAuthor = async (req, res) => {
  try {
    const { name, nationality } = req.body;
    const updatedAuthor = await authorService.updateAuthor(req.params.id, name, nationality);
    if (!updatedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json(updatedAuthor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete an author
exports.deleteAuthor = async (req, res) => {
  try {
    const deletedAuthor = await authorService.deleteAuthor(req.params.id);
    if (!deletedAuthor) {
      return res.status(404).json({ message: 'Author not found' });
    }
    res.status(200).json({ message: 'Author deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
