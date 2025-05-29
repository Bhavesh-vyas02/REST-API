# Books REST API

A simple REST API for managing books built with Node.js and Express.

## Features

- CRUD operations for books
- Rate limiting
- CORS support
- Request compression
- Security headers
- Error handling
- Request logging

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Postman (for testing API endpoints)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Bhavesh-vyas02/REST-API.git
cd books-api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on http://localhost:3000

## API Endpoints

### Get all books
```http
GET /books
```

### Get a specific book
```http
GET /books/:id
```

### Create a new book
```http
POST /books
Content-Type: application/json

{
    "title": "Book Title",
    "author": "Author Name"
}
```

### Update a book
```http
PUT /books/:id
Content-Type: application/json

{
    "title": "Updated Title",
    "author": "Updated Author"
}
```

### Delete a book
```http
DELETE /books/:id
```

## Response Format

Success Response:
```json
{
    "success": true,
    "data": {
        "id": 1,
        "title": "Book Title",
        "author": "Author Name",
        "createdAt": "2025-05-29T10:30:00.000Z"
    }
}
```

Error Response:
```json
{
    "success": false,
    "message": "Error message here"
}
```

## Security Features

- Rate limiting (100 requests per 15 minutes)
- CORS protection
- XSS Protection
- Content Security Policy
- Response compression

## Error Handling

The API includes comprehensive error handling for:
- 404 Not Found
- 400 Bad Request
- 500 Internal Server Error

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request