const Author = require('../models/Author');

// Author CRUD
exports.createAuthor = async (name, nationality) => {
  const newAuthor = new Author({ name, nationality });
  return await newAuthor.save();
};

exports.getAllAuthors = async () => {
  return await Author.find();
};

exports.getAuthorById = async (id) => {
  return await Author.findById(id);
};

exports.updateAuthor = async (id, name, nationality) => {
  return await Author.findByIdAndUpdate(id, { name, nationality }, { new: true });
};

exports.deleteAuthor = async (id) => {
  return await Author.findByIdAndDelete(id);
};
