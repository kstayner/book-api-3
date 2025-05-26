# Book API

A simple API to manage books and authors using MongoDB and Mongoose.

## Setup

1. Clone the repository
2. Install dependencies:
npm install

3. Set up your `.env` file with the following:
MONGO_URI=mongodb://localhost:27017/book-author-api

4. Start the server:
npm start


## Endpoints

### Author CRUD

- **POST** `/api/authors` - Create an author
- **GET** `/api/authors` - Get all authors
- **