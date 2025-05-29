// This file defines the routes for the application. It uses the bookController functions to handle requests for the /books endpoint.

const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel');

// In-memory books data
let books = [
    {
        id: 1,
        title: "To Kill a Mockingbird",
        author: "Harper Lee"
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell"
    },
    {
        id: 3,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald"
    }
];

// GET all books
router.get('/', (req, res) => {
    res.json({
        success: true,
        count: books.length,
        data: books
    });
});

// GET single book
router.get('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    res.json({
        success: true,
        data: book
    });
});

// POST new book
router.post('/', (req, res) => {
    try {
        const { title, author } = req.body;
        
        if (!title || !author) {
            return res.status(400).json({
                success: false,
                message: 'Title and author are required'
            });
        }

        const newBook = bookModel.addBook({ title, author });
        
        res.status(201).json({
            success: true,
            data: newBook
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error adding book',
            error: error.message
        });
    }
});

// PUT update book
router.put('/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;
    
    res.json({
        success: true,
        data: book
    });
});

// DELETE book
router.delete('/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Book not found'
        });
    }
    
    books.splice(index, 1);
    res.status(200).json({
        success: true,
        message: 'Book deleted successfully'
    });
});

module.exports = router;