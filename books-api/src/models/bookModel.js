let books = [];
let lastId = 0;

const generateId = () => {
    lastId += 1;
    return lastId;
};

const addBook = (bookData) => {
    const book = {
        id: generateId(),
        title: bookData.title,
        author: bookData.author,
        createdAt: new Date().toISOString()
    };
    books.push(book);
    return book;
};

const getAllBooks = () => {
    return books;
};

const updateBook = (id, updatedBook) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
    }
};

const deleteBook = (id) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        books.splice(index, 1);
    }
};

module.exports = {
    addBook,
    getAllBooks,
    updateBook,
    deleteBook
};