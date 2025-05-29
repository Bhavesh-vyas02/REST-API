# books-api

This project is a simple REST API for managing books with CRUD operations. It is built using Node.js and Express, and it stores book data in memory.

## Project Structure

```
books-api
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers
│   │   └── bookController.js # Handles CRUD operations for books
│   ├── routes
│   │   └── bookRoutes.js     # Defines routes for the application
│   └── models
│       └── bookModel.js      # Defines the structure of the book object
├── package.json               # Configuration file for npm
├── .gitignore                 # Specifies files to ignore by Git
└── README.md                  # Documentation for the project
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd books-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the server:
   ```
   node src/app.js
   ```

4. The server will run on `http://localhost:3000`.

## API Endpoints

- **GET /books**: Retrieve all books.
- **POST /books**: Add a new book. Requires a JSON body with `id`, `title`, and `author`.
- **PUT /books/:id**: Update a book by ID. Requires a JSON body with updated `title` and `author`.
- **DELETE /books/:id**: Remove a book by ID.