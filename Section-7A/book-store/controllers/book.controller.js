const booksTable = require("../modals/book.modal");
const db = require("../db");
const { eq } = require("drizzle-orm");
const { sql } = require("drizzle-orm");
exports.getAllBooks = async function (req, res) {
  //   res.setHeader("x-piy", "rohan rai"); // custom header start with x

  const search = req.query.search;

  if (search) {
    const books = await db
      .select()
      .from(booksTable)
      .where(
        sql`to_tsvector('english', ${booksTable.title}) @@ to_tsquery('english', ${search})`
      );
    return res.json(books);
  }

  const books = await db.select().from(booksTable);
  return res.json(books);
};

exports.getBookById = async function (req, res) {
  const id = req.params.id;
  const [book] = await db
    .select() // .select give result in form of array so we are destructuring it
    .from(booksTable)
    .where((table) => eq(table.id, id))
    .limit(1);

  if (!book) {
    return res.status(404).json({ error: `Book with id ${id} does not exist` });
  } else {
    return res.json(book);
  }
};

exports.createBook = async function (req, res) {
  const { title, authorId, description } = req.body;
  if (!title || title === "")
    return res.status(400).json({ error: "Title is required" });

  const [result] = await db
    .insert(booksTable)
    .values({
      title,
      authorId,
      description,
    })
    .returning({
      id: booksTable.id,
    });

  return res
    .status(201)
    .json({ message: "book created successfully", id: result.id });
};

exports.deleteBook = async function (req, res) {
  const id = req.params.id;

  await db.delete(booksTable).where(eq(booksTable.id, id));
  return res.status(200).json({ message: "Book deleted" });
};
