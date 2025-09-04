const { pgTable, varchar, uuid, text, index } = require("drizzle-orm/pg-core");
const { authorTable } = require("./author.modal");
const { sql } = require("drizzle-orm");

const booksTable = pgTable(
  "books",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    title: varchar("title", { length: 105 }).notNull(),
    description: text("description"),
    authorId: uuid("author_id")
      .notNull()
      .references(() => authorTable.id),
  },
  (table) => ({
    searchIndexOnTitle: index("title_index").using(
      "gin",
      sql`to_tsvector('english', ${table.title})`
    ),
  })
);

module.exports = { booksTable };
