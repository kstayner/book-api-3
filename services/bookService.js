const Book = require('../models/Book');
const Author = require('../models/Author');

// Book CRUD
exports.createBook = async (title, publication_year, author_id) => {
  const author = await Author.findById(author_id);
  if (!author) throw new Error('Author not found');
  
  const newBook = new Book({ title, publication_year, author_id });
  return await newBook.save();
};

exports.getAllBooks = async () => {
  return await Book.find().populate('author_id', 'name');
};

exports.getBookById = async (id) => {
  return await Book.findById(id).populate('author_id', 'name');
};

exports.getBooksByAuthor = async (authorId) => {
  return await Book.find({ author_id: authorId }).populate('author_id', 'name');
};

exports.updateBook = async (id, title, publication_year, author_id) => {
  const author = await Author.findById(author_id);
  if (!author) throw new Error('Author not found');
  
  return await Book.findByIdAndUpdate(id, { title, publication_year, author_id }, { new: true });
};

exports.deleteBook = async (id) => {
  return await Book.findByIdAndDelete(id);
};
