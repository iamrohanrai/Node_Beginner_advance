const { authorTable } = require("../modals/author.modal");
const { booksTable } = require("../modals/book.modal");
const db = require("../db");
const { eq } = require("drizzle-orm");

exports.getAllAuthor = async function (req, res) {
  const authors = await db.select().from(authorTable);
  return res.json(authors);
};

exports.getAuthorById = async function (req, res) {
  const [author] = await db
    .select()
    .from(authorTable)
    .where(eq(authorTable.id, req.params.id));

  if (!author) {
    return res
      .status(404)
      .json({ error: `Author with id ${req.params.id} does not exist` });
  }

  return res.json(author);
};

exports.createAuthor = async function (req, res) {
  const { firstName, lastname, email } = req.body;
  const [result] = await db
    .insert(authorTable)
    .values({
      firstName,
      lastname,
      email,
    })
    .returning({ id: authorTable.id });
  return res.json({ message: `Author has been created`, id: result.id });
};

exports.getAllBookByAuthor = async function (req, res) {
  const books = await db
    .select()
    .from(booksTable)
    .where(eq(booksTable.authorId, req.params.id));

  return res.json(books);
};
