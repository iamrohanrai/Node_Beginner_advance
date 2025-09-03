const { books } = require("../db/db.js");

exports.getAllBooks = function (req, res) {
  //   res.setHeader("x-piy", "rohan rai"); // custom header start with x
  res.json(books);
};

exports.getBookById = function (req, res) {
  const id = parseInt(req.params.id); // :id hai issliye .id likhe hai jo likhenge wahi aayega
  if (isNaN(id)) {
    return res.status(400).json({ error: `Id must be of type number` });
  }
  const book = books.find((e) => e.id === id);
  if (!book) {
    return res.status(404).json({ error: `Book with id ${id} does not exist` });
  } else {
    return res.json(book);
  }
};

exports.createBook = function (req, res) {
  const { title, author } = req.body;
  if (!title || title === "")
    return res.status(400).json({ error: "Title is required" });

  if (!author || author === "")
    return res.status(400).json({ error: "author is required" });

  const duplicate = books.find((book) => {
    return (
      book.title.toLowerCase() === title.toLowerCase() &&
      book.author.toLowerCase() === author.toLowerCase()
    ); // find method return true and also agar return use nahi kiye toh undefined aayega
  });
  if (duplicate) {
    return res.status(409).json({ error: "Book already exist" });
  }

  const id = books.length + 1;
  const book = { id, title, author };
  books.push(book);

  return res.status(201).json({ message: "book created successfully", id });
};

exports.deleteBook = function (req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "id must be of type number" });
  }

  const indexToDelete = books.findIndex((e) => e.id === id);
  if (indexToDelete < 0) {
    return res.status(404).json({ error: `Book with id ${id} does not exist` });
  }
  books.splice(indexToDelete, 1);
  return res.status(200).json({ message: "Book deleted" });
};
