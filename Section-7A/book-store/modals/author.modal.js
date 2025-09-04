const { pgTable, varchar, uuid, text } = require("drizzle-orm/pg-core");

const authorTable = pgTable("author", {
  id: uuid("id").primaryKey().defaultRandom(),
  firstName: varchar("first_name", { length: 75 }).notNull(),
  lastname: varchar("last_name", { length: 75 }),
  email: varchar("email", { lengtt: 255 }).notNull().unique(),
});

module.exports = { authorTable };
